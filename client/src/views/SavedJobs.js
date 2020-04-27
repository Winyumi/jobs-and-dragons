import React from 'react';
import 'materialize-css';
import SavedJobs from '../components/SavedJobs/index';

const SavedJobsView = () => {
  return (
    <div className='row'>
      <div className='center col s12'>
        <SavedJobs/>
      </div>
    </div>
  );
}

export default SavedJobsView;
