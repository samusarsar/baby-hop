'use client';

import FormInput from '@/components/ui/FormInput';
import BaseCard from '@/components/ui/BaseCard';
import useAuth from '@/hooks/useAuth';
import {
	isEmailValid,
	isFirstOrLastNameValid,
	isPasswordValid,
	isUsernameValid,
} from '@/utils/validation.utils';
import { useRouter } from 'next/navigation';
import React, { ChangeEvent, FocusEvent, FormEvent, useState } from 'react';
import {
	NAME_MAX_LENGTH,
	NAME_MIN_LENGTH,
	PASSWORD_MIN_LENGTH,
	USERNAME_MAX_LENGTH,
	USERNAME_MIN_LENGTH,
} from '@/common/constants';
import Link from 'next/link';

function Signup() {
	const [userData, setUserData] = useState({
		firstName: '',
		lastName: '',
		username: '',
		email: '',
		password: '',
	});
	const [errors, setErrors] = useState({
		firstName: false,
		lastName: false,
		username: false,
		email: false,
		password: false,
		generalErr: '',
	});
	const [isLoading, setIsLoading] = useState(false);

	const router = useRouter();

	const { signUp } = useAuth();

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const targetId = e.target.id;
		const targetValue = e.target.value;

		setErrors({
			...errors,
			[targetId]: false,
		});

		setUserData({
			...userData,
			[targetId]: targetValue,
		});
	};

	const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
		const targetId = e.target.id;
		const targetValue = e.target.value;

		let isValid: boolean;

		switch (targetId) {
			case 'username':
				isValid = isUsernameValid(targetValue);
				break;
			case 'email':
				isValid = isEmailValid(targetValue);
				break;
			case 'password':
				isValid = isPasswordValid(targetValue);
				break;
			default:
				isValid = isFirstOrLastNameValid(targetValue);
				break;
		}

		setErrors({
			...errors,
			[targetId]: !isValid,
		});
	};

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();

		if (
			Object.values(errors).some((el) => !!el) ||
			Object.values(userData).some((el) => !el)
		) {
			setErrors({
				...errors,
				generalErr: 'Please fill out all fields above first!',
			});
			return;
		}

		try {
			setIsLoading(true);
			await signUp(userData);

			setErrors({
				...errors,
				generalErr: '',
			});
		} catch (error) {
			setErrors({
				...errors,
				generalErr: 'Uh-oh! There was an problem signing up!',
			});
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div>
			<BaseCard title='Sign up to join'>
				<form
					className='min-w-full'
					onSubmit={handleSubmit}
				>
					<div className='mt-2 mb-4'>
						<div className='md:flex md:gap-2'>
							<FormInput
								label='First Name'
								isInvalid={!!errors.firstName}
								error={`First name must be between ${NAME_MIN_LENGTH} and ${NAME_MAX_LENGTH} characters long.`}
							>
								<input
									type='text'
									id='firstName'
									className={
										'input input-bordered w-full max-w-xs text-base-content' +
										(!!errors.firstName
											? ' border-2 border-error'
											: '')
									}
									onChange={handleChange}
									onBlur={handleBlur}
								/>
							</FormInput>
							<FormInput
								label='Last Name'
								isInvalid={!!errors.lastName}
								error={`Last name must be between ${NAME_MIN_LENGTH} and ${NAME_MAX_LENGTH} characters long.`}
							>
								<input
									type='text'
									id='lastName'
									className={
										'input input-bordered w-full max-w-xs text-base-content' +
										(!!errors.lastName
											? ' border-2 border-error'
											: '')
									}
									onChange={handleChange}
									onBlur={handleBlur}
								/>
							</FormInput>
						</div>
						<div>
							<FormInput
								label='Username'
								isInvalid={!!errors.username}
								error={`Username must be between ${USERNAME_MIN_LENGTH} and ${USERNAME_MAX_LENGTH} characters long.`}
							>
								<input
									type='text'
									id='username'
									className={
										'input input-bordered w-full max-w-xs text-base-content' +
										(!!errors.username
											? ' border-2 border-error'
											: '')
									}
									onChange={handleChange}
									onBlur={handleBlur}
								/>
							</FormInput>
							<FormInput
								label='Email'
								isInvalid={!!errors.email}
								error={'Email must be valid.'}
							>
								<input
									type='text'
									id='email'
									className={
										'input input-bordered w-full max-w-xs text-base-content' +
										(!!errors.email
											? ' border-2 border-error'
											: '')
									}
									onChange={handleChange}
									onBlur={handleBlur}
								/>
							</FormInput>
							<FormInput
								label='Password'
								isInvalid={!!errors.password}
								error={`Password must include an uppercase, lowercase and number character and be over ${PASSWORD_MIN_LENGTH} characters long.`}
							>
								<input
									type='password'
									id='password'
									className={
										'input input-bordered w-full max-w-xs text-base-content' +
										(!!errors.password
											? ' border-2 border-error'
											: '')
									}
									onChange={handleChange}
									onBlur={handleBlur}
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
						className={`btn btn-accent btn-block mt-4${
							isLoading ? ' btn-disabled' : ''
						}`}
					>
						{!isLoading ? (
							'Sign Up'
						) : (
							<span className='loading loading-dots loading-lg text-base-100'></span>
						)}
					</button>
				</form>
				<div className='py-2'>
					Already a member?{' '}
					<Link
						href='/sign-in'
						className='link link-accent'
					>
						Sign in now!
					</Link>
				</div>
			</BaseCard>
		</div>
	);
}

export default Signup;
