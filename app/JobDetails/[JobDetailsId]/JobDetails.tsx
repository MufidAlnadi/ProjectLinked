"use client"
import { Job } from "@prisma/client";

interface JobDetailsProps {
    job: Job
}
const JobDetails:React.FC<JobDetailsProps> = ({
    job
}) => {
   
    return ( <>
    <div>{job.category}</div>
    <div>{job.description}</div>
    <div>{job.full_description}</div>
    <div>{job.category}</div>
    </>  );
}
 
export default JobDetails;