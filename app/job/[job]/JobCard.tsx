'use client'
import useCountries from "@/app/hooks/useCountries";
import { Job } from "@prisma/client";
import { useRouter } from "next/navigation";
import React from "react";
interface JobCardProps{
  data: Job
}
const JobCard:React.FC<JobCardProps> = ({data}) => {
 const router = useRouter();
 const {getByValue} = useCountries();
 const location = getByValue(data.location)
  return (
    <div>
   
      <div className="container mx-auto"
      onClick={()=>router.push(`/JobDetails/${data.id}`)}
      >
        <div className="max-w p-6 mb-8 ti:mx-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
         
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {data.title}
            </h5>
          
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
           {data.description}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
           {data.location}
          </p>
            Learn more
            <svg
              aria-hidden="true"
              className="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
        </div>
      </div>
    </div>
  );
};
export default JobCard;
