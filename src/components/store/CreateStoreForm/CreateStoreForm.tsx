'use client';

import {
	STORE_NAME_MAX_LENGTH,
	STORE_NAME_MIN_LENGTH,
} from '@/common/constants';
import FormInput from '@/components/ui/FormInput';
import useAuth from '@/hooks/useAuth';
import { RootState } from '@/store/store';
import { setupStore } from '@/utils/stores.utils';
import { isStoreNameValid } from '@/utils/validation.utils';
import { useRouter } from 'next/navigation';
import React, { ChangeEvent, FocusEvent, useState } from 'react';
import { useSelector } from 'react-redux';

const CreateStoreForm = () => {
	const errorsInitialState = {
		storeName: false,
		about: false,
		brandColor: false,
		country: false,
		city: false,
		streetAddress: false,
		additionalComments: false,
		generalErr: '',
	};

	const [errors, setErrors] = useState(errorsInitialState);
	const [isLoading, setIsLoading] = useState(false);

	const {
		userData: { username },
	} = useSelector((state: RootState) => state.auth);

	const router = useRouter();

	const { updateAndSyncUserData } = useAuth();

	const handleChange = (
		e: ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>
	) => {
		const targetId = e.target.id;

		setErrors({
			...errors,
			[targetId]: false,
		});
	};

	const handleBlur = (
		e: FocusEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>
	) => {
		const targetId = e.target.id;
		const targetValue = e.target.value;

		let isValid: boolean;

		switch (targetId) {
			case 'storeName':
				isValid = isStoreNameValid(targetValue);
				break;
			default:
				isValid = !!targetValue.trim().length;
				break;
		}

		setErrors({
			...errors,
			[targetId]: !isValid,
		});
	};

	const handleCreateStore = async (formData: FormData) => {
		setErrors(errorsInitialState);

		if (
			Object.values(errors)
				.filter((el) => typeof el !== 'string')
				.some((el) => !!el) ||
			Array.from(formData.entries())
				.filter(
					(el) => el[0] !== 'about' && el[0] !== 'additionalComments'
				)
				.some((el) => !el)
		) {
			setErrors({
				...errors,
				generalErr: 'Please fill out all fields above first!',
			});
			return;
		}

		try {
			setIsLoading(true);
			const userUpdates = await setupStore(username, formData);
			await updateAndSyncUserData('username', username, userUpdates);

			setErrors({
				...errors,
				generalErr: '',
			});

			router.replace('/dashboard/store');
			setIsLoading(false);
		} catch (error) {
			setErrors({
				...errors,
				generalErr:
					'Uh-oh! There was a problem setting up your store. Please try again later!',
			});
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className='flex flex-col w-full items-center py-10'>
			<h1 className='text-4xl font-bold'>Set up your store!</h1>
			<form action={handleCreateStore}>
				<div className='flex flex-col p-4 md:grid md:grid-cols-6 max-w-3xl md:gap-6'>
					<div className='col-span-3'>
						<div className='badge badge-accent badge-lg mb-4 md:mb-0'>
							Store Info
						</div>
						<FormInput label='Username:'>
							<input
								type='text'
								id='username'
								name='username'
								defaultValue={username}
								className={
									'input input-bordered text-base-content'
								}
								disabled
							/>
						</FormInput>
						<FormInput
							label='Store Name:'
							isInvalid={!!errors.storeName}
							error={`Store name must be between ${STORE_NAME_MIN_LENGTH} and ${STORE_NAME_MAX_LENGTH} characters long.`}
						>
							<input
								type='text'
								id='storeName'
								name='storeName'
								defaultValue={username}
								className={
									'input input-bordered text-base-content' +
									(errors.storeName
										? ' border-2 border-error'
										: '')
								}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
						</FormInput>
						<FormInput label='About my store:'>
							<textarea
								id='about'
								name='about'
								rows={4}
								className={
									'textarea textarea-bordered text-base-content'
								}
							/>
						</FormInput>
						<div className='form-control text-start'>
							<label className='label cursor-pointer gap-2'>
								<span className='label-text text-neutral-content'>
									I can provide delivery and pickup of my
									products to my customers.
								</span>
								<input
									type='checkbox'
									id='doesDeliver'
									name='doesDeliver'
									className='checkbox checkbox-accent'
								/>
							</label>
						</div>
						<FormInput label='Brand Color:'>
							<select
								className={'select select-accent'}
								defaultValue='default'
								id='brandColor'
								name='brandColor'
								onChange={handleChange}
								onBlur={handleBlur}
							>
								<option
									value='default'
									disabled
								>
									Pick a brand color for your store:
								</option>
								<option value='blue'>Blue</option>
								<option value='pink'>Pink</option>
								<option value='purple'>Purple</option>
								<option value='green'>Green</option>
								<option value='orange'>Orange</option>
								<option value='yellow'>Yellow</option>
							</select>
						</FormInput>
						<div className='divider divider-accent md:hidden'></div>
					</div>
					<div className='col-span-3'>
						<div className='badge badge-accent badge-lg mb-4 md:mb-0'>
							Store Address
						</div>
						<FormInput
							label='Country:'
							isInvalid={!!errors.country}
							error={`Please enter a valid country.`}
						>
							<input
								type='text'
								id='country'
								name='country'
								className={
									'input input-bordered text-base-content' +
									(errors.country
										? ' border-2 border-error'
										: '')
								}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
						</FormInput>
						<FormInput
							label='City:'
							isInvalid={!!errors.city}
							error={`Please enter a valid city.`}
						>
							<input
								type='text'
								id='city'
								name='city'
								className={
									'input input-bordered text-base-content' +
									(errors.city
										? ' border-2 border-error'
										: '')
								}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
						</FormInput>
						<FormInput
							label='Street name:'
							isInvalid={!!errors.streetAddress}
							error={`Please enter a valid street address.`}
						>
							<input
								type='text'
								id='streetAddress'
								name='streetAddress'
								className={
									'input input-bordered text-base-content' +
									(errors.streetAddress
										? ' border-2 border-error'
										: '')
								}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
						</FormInput>
						<FormInput label='Additional comments:'>
							<textarea
								id='additionalComments'
								name='additionalComments'
								rows={4}
								className={
									'textarea textarea-bordered text-base-content'
								}
								onChange={handleChange}
							/>
						</FormInput>
					</div>
				</div>
				{!!errors.generalErr && (
					<div className='flex justify-start'>
						<div className='badge badge-error'>
							{errors.generalErr}
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								className='inline-block w-4 h-4 stroke-current cursor-pointer'
								onClick={() =>
									setErrors({ ...errors, generalErr: '' })
								}
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M6 18L18 6M6 6l12 12'
								></path>
							</svg>
						</div>
					</div>
				)}
				<button
					className={`btn btn-accent btn-block mt-4 ${
						isLoading ? 'btn-disabled' : ''
					}`}
				>
					{isLoading ? (
						<>
							<span className='loading loading-spinner'></span>{' '}
							Setting Up...
						</>
					) : (
						<>Set Up</>
					)}
				</button>
			</form>
		</div>
	);
};

export default CreateStoreForm;
