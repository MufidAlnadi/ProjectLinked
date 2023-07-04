
import React from 'react';
import EmptyState from '../components/EmptyState';
import Applcationcards from './Applcationcards';
import { getPostedJobs } from '../actions/getUserJobs';
// interface ApplicationProps{
// 	id:id
// }
const Application = async () => {
	const jobs =  await getJobs();
   const filtered = jobs.filter((job) => {
    return job.category === decodeURIComponent(params.job) && !job.is_closed && job.is_approved;
  });
	return (
		<>
			{jobs?.map((job:any)=>{
        return(

          <Applcationcards key={job.id} data={job} />
        )
      })}
			
		</>
	);
};

export default Application;
