'use client';
import React from 'react';
import { IconType } from 'react-icons';
import JobCategory from './JobCategory';
interface JobInfoProps {
	category:
		| {
				icon: IconType;
				label: string;
				name: string;
		  }
		| undefined;
	description: string;
	fullDescription: string;
	location: string;
}
const JobInfo: React.FC<JobInfoProps> = ({
	category,
	description,
	fullDescription,
	location,
}) => {
	return (
		<div className="col-span-4 flex flex-col gap-8">
			<div className="text-xl font-semibold flex flex-row items-center gap-2">
				<div>{description} </div>
			</div>
			<hr />
			{category && (
				<JobCategory
					icon={category.icon}
					label={category.name}
					description={category.label}
				/>
			)}
			<hr />
			<div className="text-lg font-light text-neutral-500">
				{fullDescription}
			</div>
		</div>
	);
};

export default JobInfo;
