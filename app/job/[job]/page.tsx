
import EmptyState from "@/app/components/EmptyState";
import React from "react";
import JobCard from "./JobCard";
import getJobs from "@/app/actions/getJobs";



export default async function page() {
   const jobs=  await getJobs();

  if (jobs.length===0) {
    return <EmptyState showReset/>;
  }
  return (
    <div>
      {jobs.map((job:any)=>{
        return(

          <JobCard key={job.id} data={job} />
        )
      })}
    </div> 
  );
}

