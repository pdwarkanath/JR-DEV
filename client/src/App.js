import React from 'react';
import './App.css';
import Jobs from './Jobs'

const mockJobs = [
  {title: 'SWe 1', company: 'Google'},
  {title: 'SWe 2', company: 'Amazon'}
]

function App() {
  return (
    <div className="App">
      <Jobs jobs = {mockJobs}/>
    </div>
  );
}

export default App;
