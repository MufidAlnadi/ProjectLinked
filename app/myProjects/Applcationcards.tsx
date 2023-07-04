'use client';
import React from 'react';
import useCountries from '@/app/hooks/useCountries';
import { useRouter } from 'next/navigation';
import { getApplications } from '@/app/api/getAppliactionById/route';
import { Job } from '@prisma/client';
import { useSession } from 'next-auth/react';
import EmptyState from '../components/EmptyState';

interface JobCardProps {
	data: Job;
}

const Applcationcards: React.FC<JobCardProps> = ({ data }) => {
	const router = useRouter();
	const { getByValue } = useCountries();
	const location = getByValue(data.location);
	const formattedStartDate = data.start_date
		? data.start_date.substring(0, 10)
		: '';
	const formattedEndDate = data.end_date ? data.end_date.substring(0, 10) : '';
	const { data: session } = useSession();

	const sessionUserId = session?.user?.id;
	const isOwner = data.owner_id === sessionUserId;

	if (!isOwner) {
		return (
			<EmptyState
				title="No Projects yet"
				subtitle="looks like no one submitted any application"
			/>
		);
	}

	return (
		<div>
			<section className="w-screen">
				<div className="m-4 mx-auto max-w-screen-lg rounded-md border border-gray-500 text-gray-600 shadow-md">
					<div className="relative flex h-full flex-col text-gray-600 md:flex-row">
						<div className="relative p-8 md:w-4/6">
							<div className="flex flex-col md:flex-row">
								<h2 className="mb-2 text-2xl font-black">{data.category}</h2>
								<span className="ml-2 text-xs uppercase"> ID: {data.id}</span>
							</div>
							<p className="mt-3 font-sans text-base tracking-normal">
								{data.description}
							</p>
							<div className="flex flex-col md:flex-row md:items-end">
								<p className="mt-6 text-4xl font-black">{data.title}</p>
							</div>
							<div className="mt-8 flex flex-col sm:flex-row">
								<button
									onClick={() => router.push(`/applications/${data.id}`)}
									className="mr-2 mb-4 flex cursor-pointer items-center justify-center rounded-md bg-blue-500 py-2 px-8 text-center text-white transition duration-150 ease-in-out hover:translate-y-1 hover:bg-blue-900"
								>
									Applications
								</button>
								<button
									onClick={() => router.push(`/JobDetails/${data.id}`)}
									className="mr-2 mb-4 flex cursor-pointer items-center justify-center rounded-md border py-2 px-8 text-center text-gray-500 transition duration-150 ease-in-out hover:translate-y-1 hover:bg-rose-500 hover:text-white"
								>
									Preview
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Applcationcards;
