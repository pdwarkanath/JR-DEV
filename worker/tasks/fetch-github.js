var fetch = require('node-fetch');
var redis = require("redis");
const client = redis.createClient();

const {promisify} = require('util');
const setAsync = promisify(client.set).bind(client);

const baseURl = 'https://jobs.github.com/positions.json';

async function fetchGithub(){
    let resultCount = 1;
    let onPage = 0;
    const allJobs = [];
    while (resultCount > 0) {
        const res = await fetch(`${baseURl}?page=${onPage}`);
        const jobs = await res.json();
        resultCount = jobs.length;
        allJobs.push(...jobs);
        console.log('Found ', resultCount, ' jobs.');
        onPage++;
    }
    console.log('Found a total of ', allJobs.length, ' jobs.');
    const jrJobs = allJobs.filter(
        job=> {
            const jobTitle = job.title.toLowerCase();
            if (jobTitle.includes('senior') ||
            jobTitle.includes('manager') ||
            jobTitle.includes('sr.') ||
            jobTitle.includes('architect')){
                return false;
            }
            else {
                return true;
            }
        }
    )

    
    console.log('Filtered down to ', jrJobs.length, ' junior jobs.');
    const success = await setAsync('github', JSON.stringify(jrJobs));
    console.log({success});
}
fetchGithub();

module.exports = fetchGithub;