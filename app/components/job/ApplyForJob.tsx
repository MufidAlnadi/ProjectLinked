'use client';
import React, { useState } from 'react';
import Button from '../Button';
import Link from 'next/link';
import useApplyJobModal from '@/app/hooks/useApplyJobModal';

const ApplyForJob = () => {
	const [show, setShow] = useState(false);
	const [show2, setShow2] = useState(false);
	const [agreed, setAgreed] = useState(false);
	const ApplyJobModal = useApplyJobModal();

	const handleAgree = () => {
		setAgreed(true);
	};

	const handleApply = () => {
		ApplyJobModal.onOpen();
	};

	return (
		<div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
			<div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
				<div className="border-b border-gray-200 pb-6">
					<p className="text-sm leading-none text-gray-600">
						Check the guidelines
					</p>
					<h1 className="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 mt-2">
						Application Guidelines
					</h1>
				</div>
				<div className="mt-6">
					<div className="p-4 bg-gray-100 rounded-lg">
						<div className="py-2">
							<p className="text-sm leading-6 text-gray-600">
								Contractors have the sole discretion to review and evaluate the
								applications they receive. They may choose to contact
								subcontractors directly if they are interested in their
								services. However, due to the high volume of applications and
								varying project requirements, contractors may not be able to
								respond to every applicant or provide updates on the status of
								their application.
							</p>
						</div>
					</div>
					{!agreed && (
						<div className="my-4">
							<label className="flex items-center">
								<input
									type="checkbox"
									className="form-checkbox"
									onChange={handleAgree}
								/>
								<span className="ml-2 text-sm text-gray-600">
									I agree to the application guidelines.
								</span>
							</label>
						</div>
					)}
					{agreed && (
						<div className="py-4">
							<Button label="Apply" onClick={handleApply} />
						</div>
					)}
					<div className="border-t border-b py-4 mt-7 border-gray-200">
						<div
							onClick={() => setShow(!show)}
							className="flex justify-between items-center cursor-pointer"
						>
							<p className="text-base leading-4 text-gray-800">
								Privacy Policy
							</p>
							<button
								className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 rounded"
								aria-label="show or hide"
							>
								<svg
									className={'transform ' + (show ? 'rotate-180' : 'rotate-0')}
									width="10"
									height="6"
									viewBox="0 0 10 6"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M9 1L5 5L1 1"
										stroke="#4B5563"
										strokeWidth="1.25"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</button>
						</div>
						<div
							className={
								'pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 ' +
								(show ? 'block' : 'hidden')
							}
							id="sect"
						>
							At ProjectLinked, we are committed to protecting your privacy.
							This Privacy Policy outlines how we collect, use, and safeguard
							your personal information when you visit our website or engage
							with our services. By using our website or providing us with your
							personal information, you consent to the terms outlined in this
							Privacy Policy.
						</div>
					</div>
					<div className="border-b py-4 border-gray-200">
						<div
							onClick={() => setShow2(!show2)}
							className="flex justify-between items-center cursor-pointer"
						>
							<p className="text-base leading-4 text-gray-800">Contact us</p>
							<button
								className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 rounded"
								aria-label="show or hide"
							>
								<svg
									className={'transform ' + (show2 ? 'rotate-180' : 'rotate-0')}
									width="10"
									height="6"
									viewBox="0 0 10 6"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M9 1L5 5L1 1"
										stroke="#4B5563"
										strokeWidth="1.25"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</button>
						</div>
						<div
							className={
								'pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 ' +
								(show2 ? 'block' : 'hidden')
							}
							id="sect"
						>
							If you have any questions on your application or anything else, do
							not hesitate to{' '}
							<Link
								href="/contact"
								className="hover:underline text-blue-500 cursor-pointer"
							>
								contact us
							</Link>
							.
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ApplyForJob;
