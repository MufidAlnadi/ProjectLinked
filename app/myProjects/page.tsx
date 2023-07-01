
import React from 'react';
import EmptyState from '../components/EmptyState';
import Applcationcards from './Applcationcards';
import { getPostedJobs } from '../actions/getUserJobs';
// interface ApplicationProps{
// 	id:id
// }
const Application = async () => {
	const jobs = await getPostedJobs(1)
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
