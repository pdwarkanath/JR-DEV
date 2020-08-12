import React from 'react'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Job from './Job'
import MobileStepper from '@material-ui/core/MobileStepper';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';


export default function Jobs({jobs}){
    console.log(jobs[0]);
    const numJobs = jobs.length;
    const numPages = Math.ceil(numJobs/50);

    const [activeStep, setActiveStep] = React.useState(0);
    const jobsOnPage = jobs.slice(activeStep*50, (activeStep+1)*50);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <div className="jobs">
            <Typography variant="h4" component="h1">
                Entry Level Software Jobs
            </Typography>
            <Typography variant="h6" component="h1">
                Found {numJobs} jobs
            </Typography>
            {
                jobsOnPage.map(
                    job => <Job job={job} />
                )
            }
            
        <div>
            Page {activeStep+1} / {numPages}
        </div>
        <MobileStepper
        variant="progress"
        steps={numPages-1}
        position="static"
        activeStep={activeStep}
        
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === numPages-1}>
            Next
            <KeyboardArrowRight />
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            <KeyboardArrowLeft />
            Back
          </Button>
        }
      />
      </div>
    )
}
