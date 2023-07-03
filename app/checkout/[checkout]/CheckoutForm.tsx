import { JobApplication } from '@prisma/client';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { toast } from 'react-hot-toast';

interface FormData {
	email: string;
	cardNumber: string;
	expirationMonth: string;
	expirationYear: string;
	securityCode: string;
	cardName: string;
	price: number;
}

interface CheckoutProps {
	application: JobApplication;
}

const CheckoutForm: React.FC<CheckoutProps> = ({ application }) => {
	const [isLoading, setIsLoading] = useState(false);
        const router = useRouter();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		defaultValues: {
			email: '',
			cardNumber: '',
			expirationMonth: '',
			expirationYear: '',
			securityCode: '',
			cardName: '',
			price: application.price,
		},
	});

	const onSubmit: SubmitHandler<FormData> = async (data) => {
		setIsLoading(true);

		try {
			await axios.put('/api/updatePayment', {
				applicationId: application.id,
				payment: data.price,
			});

			toast.success('Payment updated successfully');
            router.push('/');

		} catch (error) {
			toast.error('Failed to update payment');
			console.error(error);
		}

		setIsLoading(false);
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="mt-10 flex flex-col space-y-4"
		>
			{/* Email input */}
			<div>
				<label htmlFor="email" className="text-xs font-semibold text-gray-500">
					Email
				</label>
				<input
					type="email"
					id="email"
					{...register('email', {
						required: true,
					})}
					placeholder="john.capler@fang.com"
					className={`mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 ${
						errors.email ? 'ring-red-500' : 'focus:ring-blue-500'
					}`}
				/>
				{errors.email && (
					<p className="text-red-500 text-xs mt-1">
						Please enter a valid email
					</p>
				)}
			</div>

			{/* Card number input */}
			<div className="relative">
				<label
					htmlFor="card-number"
					className="text-xs font-semibold text-gray-500"
				>
					Card number
				</label>
				<input
					type="text"
					id="card-number"
					{...register('cardNumber', {
						required: true,
						pattern: /^[0-9]+$/i,
					})}
					placeholder="1234-5678-XXXX-XXXX"
					className={`block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 pr-10 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 ${
						errors.cardNumber ? 'ring-red-500' : 'focus:ring-blue-500'
					}`}
				/>
				{errors.cardNumber && (
					<p className="text-red-500 text-xs mt-1">
						Please enter a valid card number
					</p>
				)}
			</div>

			{/* Expiration date inputs */}
			<div className="flex">
				<div className="w-1/2 pr-2">
					<label
						htmlFor="expiration-month"
						className="text-xs font-semibold text-gray-500"
					>
						Expiration Month
					</label>
					<input
						type="text"
						id="expiration-month"
						{...register('expirationMonth', {
							required: true,
							pattern: /^(0[1-9]|1[0-2])$/,
						})}
						placeholder="MM"
						className={`mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 ${
							errors.expirationMonth ? 'ring-red-500' : 'focus:ring-blue-500'
						}`}
					/>
					{errors.expirationMonth && (
						<p className="text-red-500 text-xs mt-1">
							Please enter a valid expiration month (01-12)
						</p>
					)}
				</div>
				<div className="w-1/2 pl-2">
					<label
						htmlFor="expiration-year"
						className="text-xs font-semibold text-gray-500"
					>
						Expiration Year
					</label>
					<input
						type="text"
						id="expiration-year"
						{...register('expirationYear', {
							required: true,
							pattern: /^(2[3-9]|3[0-9]|4[0-9]|5[0-9]|6[0-9]|7[0-9]|8[0-8])$/,
						})}
						placeholder="YY"
						className={`mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 ${
							errors.expirationYear ? 'ring-red-500' : 'focus:ring-blue-500'
						}`}
					/>
					{errors.expirationYear && (
						<p className="text-red-500 text-xs mt-1">
							Please enter a valid expiration year (23-88)
						</p>
					)}
				</div>
			</div>

			{/* Security code input */}
			<div>
				<label
					htmlFor="security-code"
					className="text-xs font-semibold text-gray-500"
				>
					Security code
				</label>
				<input
					type="text"
					id="security-code"
					{...register('securityCode', {
						required: true,
						pattern: /^[0-9]{3}$/,
					})}
					placeholder="123"
					className={`block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 ${
						errors.securityCode ? 'ring-red-500' : 'focus:ring-blue-500'
					}`}
				/>
				{errors.securityCode && (
					<p className="text-red-500 text-xs mt-1">
						Please enter a valid security code (000-999)
					</p>
				)}
			</div>

			{/* Cardholder name input */}
			<div>
				<label
					htmlFor="card-name"
					className="text-xs font-semibold text-gray-500"
				>
					Cardholder name
				</label>
				<input
					type="text"
					id="card-name"
					{...register('cardName', {
						required: true,
					})}
					placeholder="John Capler"
					className={`block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 ${
						errors.cardName ? 'ring-red-500' : 'focus:ring-blue-500'
					}`}
					style={{ textTransform: 'capitalize' }}
				/>
				{errors.cardName && (
					<p className="text-red-500 text-xs mt-1">
						Please enter a valid cardholder name
					</p>
				)}
			</div>

			{/* Price */}
			<div>
				<label htmlFor="price" className="text-xs font-semibold text-gray-500">
					Price
				</label>
				<input
					type="number"
					id="price"
					{...register('price', {
						required: true,
					})}
					value={application.price}
					className={`mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 ${
						errors.price ? 'ring-red-500' : 'focus:ring-blue-500'
					}`}
					disabled
				/>
				{errors.price && (
					<p className="text-red-500 text-xs mt-1">
						Please enter a valid price
					</p>
				)}
			</div>

			{/* Submit button */}
			<button
				type="submit"
                disabled={isLoading}
				className="mt-6 bg-blue-500 
                disabled:opacity-70
                disabled:cursor-not-allowed
                text-white py-2 px-4 rounded-md hover:bg-blue-900 transition"
			>
				Place Order
			</button>
		</form>
	);
};

export default CheckoutForm;
