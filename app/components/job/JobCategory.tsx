'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import { IconType } from 'react-icons';
interface JobCategoryProps {
	icon: IconType;
	label: string;
	description: string;
}
const JobCategory: React.FC<JobCategoryProps> = ({
	icon: Icon,
	label,
	description,
}) => {
    // const router = useRouter();
	return (
		<div className=" flex flex-col gap-6">
			<div className="flex flex-row items-center gap-4">
				<Icon size={40} className=" text-neutral-600" 
                // onClick={() => router.push(`/categories/${label}`)}
                />
				<div className="flex flex-col ">
					<div className=" text-lg font-semibold">
                        {label}
                    </div>
                    <div className='text-neutral-500 font-light'>
                        {description}
                    </div>

				</div>
			</div>
		</div>
	);
};

export default JobCategory;
