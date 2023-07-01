	'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { JobApplication } from '@prisma/client';

interface ApplicationCardProps {
	application: JobApplication;
}
const ApplicationCard: React.FC<ApplicationCardProps> = ({ application }) => {
	const router = useRouter();

	return (
		<div>
			<div className="m-5">
				<div className="group mx-2 mt-10 grid max-w-screen-md grid-cols-12 space-x-8 overflow-hidden rounded-lg border border-black  py-8 text-gray-700 shadow transition hover:shadow-lg sm:mx-auto">
					<div className="col-span-11 flex flex-col pr-8 text-left sm:pl-4">
						<h3 className="text-base p-2 text-gray-600">
							Application num: {application.id}
						</h3>

						<p className=" p-2 text-2xl text-black">
							Description: {application.description}
						</p>
						<p className=" p-2 text-xl text-neutral-700">
							Info: {application.additional_info}
						</p>
						<p className=" p-2 text-lg text-neutral-500">
							Cover letter: {application.cover_letter}
						</p>
						<div className="mt-5 flex flex-col space-y-3 text-sm font-medium text-gray-500 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2">
							<div className="text-base pl-2">
								Experience:
								<span className="ml-2 mr-3 rounded-full bg-green-100 px-2 py-0.5 text-green-900">
									{application.years_of_experience} Year/s
								</span>
							</div>
							<div className="text-base pl-2">
								Price:
								<span className="ml-2 mr-3 rounded-full bg-blue-100 px-2 py-0.5 text-blue-900">
								$: {parseFloat(application.price.toString().replace(/\D/g, '')) * 1.20}
								</span>
							</div>
						</div>
						<button
							onClick={() => router.push(`/checkout/${application.id}`)}
							className="mr-2 mb-4 flex cursor-pointer items-center justify-center mt-6 rounded-md bg-blue-500 py-2 px-8 text-center text-white transition duration-150 ease-in-out hover:translate-y-1 hover:bg-blue-900 w-1/2"
						>
							Accept
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ApplicationCard;
