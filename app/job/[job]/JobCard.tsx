'use client';
import useCountries from '@/app/hooks/useCountries';
import { Job } from '@prisma/client';
import { useRouter } from 'next/navigation';
import React from 'react';
interface JobCardProps {
	data: Job;
}
const JobCard: React.FC<JobCardProps> = ({ data }) => {
	const router = useRouter();
	const { getByValue } = useCountries();
	const location = getByValue(data.location);
	const formattedStartDate = data.start_date
		? data.start_date.substring(0, 10)
		: '';
	const formattedEndDate = data.end_date ? data.end_date.substring(0, 10) : '';

	return (
    
		<div
			onClick={() => router.push(`/JobDetails/${data.id}`)}
			className="cursor-pointer"
		>
			<div className="container mx-auto">
				<div className="max-w p-6 mb-8 ti:mx-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
					<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
						{data.title}
					</h5>

					<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
						{data.description}
					</p>
					<div className="font-semibold text-lg text-white">
						{location?.capital}, {location?.label} ({location?.region})
					</div>
					<div className="font-semibold text-lg text-white">
						Starts from: {formattedStartDate} to {formattedEndDate}
					</div>
					<div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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
		</div>
	);
};
export default JobCard;
