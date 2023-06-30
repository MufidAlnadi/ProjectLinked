'use client';

import { popularServicesData } from '@/app/components/home/Categories';
import JobHead from '@/app/components/job/JobHead';
import JobInfo from '@/app/components/job/JobInfo';
import { useJobId } from '@/app/hooks/useJobId';
import { Job } from '@prisma/client';
import { useEffect, useMemo } from 'react';

interface JobDetailsProps {
	job: Job;
}
const JobDetails: React.FC<JobDetailsProps> = ({ job }) => {
	const categoryFind = useMemo(() => {
		const foundItem = popularServicesData.find((item) => item.name === job.category);
		
		if (!foundItem) {
		  console.error(`No matching item found in popularServicesData for category: ${job.category}`);
		}
		
		return foundItem;
	  }, [job.category]);
	  const formattedStartDate = job.start_date
	  ? job.start_date.substring(0, 10)
	  : '';
  const formattedEndDate = job.end_date ? job.end_date.substring(0, 10) : '';
;
  const { setJobId } = useJobId();
  useEffect(() => {
    // Set the job ID in the useJobId hook
    setJobId(job.id);
  }, [job.id, setJobId])
	return (
		<>
			<div className="max-w-screen-lg mx-auto ">
				<div className="flex flex-col gap-6">
					<JobHead title={job.title} locationValue={job.location} id={job.id} />
					<div>date{formattedEndDate}</div>
					<hr />
					<div> project requirements</div>
					<JobInfo
						category={categoryFind}
						description={job.description}
						fullDescription={job.full_description}
						location={job.location}
						pdf={job.pdf_path}
					/>
				</div>
			</div>
		</>
	);
};

export default JobDetails;
