"use client"
import React from 'react';
import { JobApplication } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';
import CheckoutForm from './CheckoutForm';

interface CheckoutProps {
	application: JobApplication;
}
const Checkout: React.FC<CheckoutProps> = ({ application }) => {
	
	return (
		<div className="relative mx-auto w-full bg-white">
			<div className="grid min-h-screen grid-cols-10">
				<div className="col-span-full py-6 px-4 sm:py-12 lg:col-span-6 lg:py-24">
					<div className="mx-auto w-full max-w-lg">
						<h1 className="relative text-2xl font-medium text-gray-700 sm:text-3xl">
							Secure Checkout
							<span className="mt-2 block h-1 w-10 bg-teal-600 sm:w-20" />
						</h1>
						<CheckoutForm application={application}/>
						
						<p className="mt-10 text-center text-sm font-semibold text-gray-500">
							By placing this order you agree to the{' '}
							<Link
								href="#"
								className="whitespace-nowrap text-blue-500 underline hover:text-blue-800"
							>
								Terms and Conditions
							</Link>
						</p>
					</div>
				</div>
				<div className="relative col-span-full flex flex-col py-6 pl-8 pr-4 sm:py-12 lg:col-span-4 lg:py-24">
					<h2 className="sr-only">Project summary</h2>
					<div>
						<div className="absolute inset-0 h-full w-full bg-gradient-to-t from-blue-800 to-blue-400 opacity-95" />
					</div>
					<div className="relative">
						<ul className="space-y-5">
							<li className="flex justify-between">
								<div className="inline-flex">
									<div className="">
										<p className=" text-xl font-semibold text-white">
											Transaction Confirmation{' '}
										</p>
										<p className="text-sm font-medium text-white text-opacity-80">
											application description: {application.description}
										</p>
									</div>
								</div>
								<p className="text-sm font-semibold text-white"></p>
							</li>
						</ul>
						<div className="my-5 h-0.5 w-full bg-white bg-opacity-30" />
						<div className="space-y-2">
							<p className="flex justify-between text-2xl font-bold text-white">
								<span>Total price:</span>
								<span>${application.price}</span>
							</p>
						</div>
					</div>
					<div className="my-5 h-0.5 w-full bg-white bg-opacity-30" />
					<div className="relative mt-10 text-white">
						<h3 className="mb-5 text-lg font-bold">Support</h3>
						<p className="text-sm font-semibold">
							+01 653 235 211{' '}
							<span className="font-light">(International)</span>
						</p>
						<p className="mt-1 text-sm font-semibold">
							support@projectlinked.com{' '}
							<span className="font-light">(Email) </span>
						</p>
						<p className="mt-2 text-xs font-medium">
							Call us now for payment related issues
						</p>
					</div>
					<div className="relative mt-10 flex">
						<p className="flex flex-col">
							<span className="text-sm font-bold text-white">
								Terms and Conditions
							</span>
							<span className="text-xs font-medium text-white">
								Please read these terms and conditions carefully before engaging
								in any transaction or project with us. By using our services,
								you agree to the following terms and conditions:
							</span>
							<br />
							<span className="text-xs font-medium text-white">
								Project Responsibility: We undertake the responsibility to
								diligently execute the agreed-upon project to the best of our
								abilities. We will strive to meet your expectations and deliver
								satisfactory results within the agreed-upon scope.
							</span>
							<br />
							<span className="text-xs font-medium text-white">
								No Refunds: Once the project has commenced and payment has been
								made, refunds will not be provided. We allocate resources, time,
								and effort based on the project requirements, making it
								impractical to offer refunds.
							</span>
							<br />
							<span className="text-xs font-medium text-white">
								Project Alterations: If there is a need to modify the project
								scope or requirements, we will work with you to accommodate
								reasonable changes. However, any additional costs incurred as a
								result of these changes may be subject to revision of the
								project&apos;s pricing and timeline.
							</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Checkout;
