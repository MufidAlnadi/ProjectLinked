
import EmptyState from "@/app/components/EmptyState";
import React from "react";
import JobCard from "./JobCard";
import getJobs from "@/app/actions/getJobs";



interface IdParams {
	appID: string;
}


const page = async ({ params }: { params: IdParams }) => {
   
   const jobs =  await getJobs();
   const filtered = jobs.filter((job) => job.category === decodeURIComponent(params.job));
  //  console.log("🚀 ~ file: page.tsx:18 ~ page ~ filtered:", filtered)

  if (filtered.length===0) {
    return <EmptyState showReset/>;
  }
  return (
    <div>
      {filtered.map((job:any)=>{
        return(

          <JobCard key={job.id} data={job} />
        )
      })}
    </div> 
  );
}
export default page;

