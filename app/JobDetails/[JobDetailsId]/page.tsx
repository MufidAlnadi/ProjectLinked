import getJobById from '@/app/actions/getJobById';
import React from 'react';
import JobDetails from './JobDetails';
import ApplyForJob from '@/app/components/job/ApplyForJob';

interface IdParams {
	JobDetailsId: string;
}

const JobDetailsPage = async ({ params }: { params: IdParams }) => {
	const jobById = await getJobById({ jobById: Number(params.JobDetailsId) });
	console.log('🚀 ~ file: page.tsx:11 ~ JobDetailsPage ~ jobById:', jobById);
	return (
		<>
			<div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
				<div className="lg:pl-10 pl-2 flex">
					<div className="flex-grow">
						<JobDetails job={jobById} />
					</div>
				</div>
				<div className="flex">
					<div className="flex-grow">
						<ApplyForJob />
					</div>
				</div>
			</div>
		</>
	);
};

export default JobDetailsPage;
