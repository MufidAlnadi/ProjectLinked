'use client';
import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import Modal from './Modal';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import useApplyJobModal from '@/app/hooks/useApplyJobModal';
import Heading from '../Heading';
import Input from '../inputs/Input';
import { useJobId } from '@/app/hooks/useJobId';

enum STEPS {
	NAME = 0,
	LOCATION = 1,
	CONTACT = 2,
	CV = 3,
	PDF = 4,
	DESCRIPTION = 5,
}
const ApplyJobModal: React.FC = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [step, setStep] = useState(STEPS.LOCATION);
	const router = useRouter();
	const { data: session } = useSession();
	const { jobId } = useJobId(); // Access the jobId value from the useJobId hook

	const applyModal = useApplyJobModal();
	const {
		register,
		handleSubmit,
		setValue,
		watch,
		formState: { errors },
		reset,
	} = useForm<FieldValues>({
		defaultValues: {
			first_name: '',
			last_name: '',
			mobile_no: '',
			pdf_path: '',
			email: '',
			description: '',
			cv: '',
			cover_letter: '',
			additional_info: '',
			years_of_experience: 1,
			submitted_by: 0,
			price: 0,
		},
	});
	useEffect(() => {
		if (session?.user?.id) {
			setValue('submitted_by', session.user.id);
		}
		setValue('job_id', jobId);
	}, [session, setValue, jobId]);

	const setCustomValues = (id: any, value: any) => {
		setValue(id, value, {
			shouldDirty: true,
			shouldTouch: true,
			shouldValidate: true,
		});
	};
	const onBack = () => {
		setStep((value) => value - 1);
	};
	const onNext = () => {
		setStep((value) => value + 1);
	};

	const onSubmit: SubmitHandler<FieldValues> = (data: any) => {
		console.log('data: ', data);

		data.years_of_experience = parseInt(data.years_of_experience);
		data.price = parseInt(data.price);

		if (step !== STEPS.DESCRIPTION) {
			return onNext();
		}
		setIsLoading(true);
		axios
			.post('/api/jobApplications', data)
			.then(() => {
				toast.success('Application Submitted');
				router.refresh();
				reset();
				setStep(STEPS.LOCATION);
				applyModal.onClose();
			})
			.catch((error) => {
				toast.error('Something went wrong', error);
				console.log('data: ', data);
			})
			.finally(() => {
				setIsLoading(false);
				console.log('data: ', data);
			});
		console.log('data: ', data);
	};

	const actionLabel = useMemo(() => {
		if (step === STEPS.DESCRIPTION) {
			return 'SUBMIT';
		}
		return 'Next';
	}, [step]);
	const secondaryActionLabel = useMemo(() => {
		if (step === STEPS.NAME) {
			return undefined;
		}
		return 'Back';
	}, [step]);
	let bodyContent = (
		<div className="flex flex-col gap-8">
			<Heading title="Enter Your Name " subtitle="Introduce Yourself to Us " />
			<Input
				id="first_name"
				label="First Name"
				register={register}
				errors={errors}
				required
			/>
			<Input
				id="last_name"
				label="Last Name"
				register={register}
				errors={errors}
				required
			/>
		</div>
	);
	if (step === STEPS.CONTACT) {
		bodyContent = (
			<div className="flex flex-col gap-8">
				<Heading
					title="Enter Your Contact Information"
					subtitle="Help us stay connected with you"
				/>{' '}
				<Input
					id="mobile_no"
					label="Mobile Number"
					type="number"
					register={register}
					errors={errors}
					required
				/>
				{errors.mobile_no && (
					<span className="text-red-500">Mobile number is required</span>
				)}
				<Input
					id="email"
					label="Email"
					type="email"
					register={register}
					errors={errors}
					required
				/>
				{errors.email && (
					<span className="text-red-500">Email is required</span>
				)}
			</div>
		);
	}
	if (step === STEPS.CV) {
		bodyContent = (
			<div className="flex flex-col gap-8">
				<Heading
					title="Your Professional Background"
					subtitle="Requirement for your project"
				/>
				<h1>CV</h1>
				<hr />
				<h3 className="text-neutral-500">(optional)</h3>

				<textarea
					id="cover_letter"
					rows={4}
					className="peer w-full p-4 pt-6 font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed border-neutral-600-500 focus:border-black"
					placeholder="Cover letter"
					{...register('cover_letter')}
				/>
				<Input
					id="years_of_experience"
					label="Years of Experience"
					type="number"
					register={register}
					errors={errors}
					required
				/>
			</div>
		);
	}

	if (step === STEPS.PDF) {
		bodyContent = (
			<div className="flex flex-col gap-8">
				<Heading title="Submit your project documentation" subtitle="PDF" />
			</div>
		);
	}
	if (step === STEPS.DESCRIPTION) {
		bodyContent = (
			<div className="flex flex-col gap-8">
				<Heading
					title="Describe your project"
					subtitle="Requirement for your project"
				/>
				<h1>Add a concise description</h1>
				<Input
					id="description"
					label="Details"
					disabled={isLoading}
					register={register}
					errors={errors}
					required
				/>
				<Input
					id="description"
					label="Price"
					type="number"
					disabled={isLoading}
					register={register}
					errors={errors}
					required
				/>
				<h1>
					{' '}
					Add Additional Info <p className="text-neutral-500">
						(optional){' '}
					</p>{' '}
				</h1>
				<textarea
					id="additional_info"
					rows={4}
					className={`
          peer
          w-full
          p-4
          pt-6 
          font-light 
          bg-white 
          border-2
          rounded-md
          outline-none
          transition
          disabled:opacity-70
          disabled:cursor-not-allowed border-neutral-600-500
          focus:border-black
         
        `}
					placeholder="Additional Info"
					{...register('additional_info')}
				/>
			</div>
		);
	}
	return (
		<Modal
			title="Submit your Application"
			isOpen={applyModal.isOpen}
			actionLabel={actionLabel}
			secondaryActionLabel={secondaryActionLabel}
			secondaryAction={step === STEPS.NAME ? undefined : onBack}
			onClose={applyModal.onClose}
			onSubmit={handleSubmit(onSubmit)}
			body={bodyContent}
		/>
	);
};

export default ApplyJobModal;
