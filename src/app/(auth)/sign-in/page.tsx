'use client';

import BaseCard from '@/components/ui/BaseCard';
import React, { useState } from 'react';
import FormInput from '@/components/ui/FormInput';
import useAuth from '@/hooks/useAuth';
import Link from 'next/link';

function SignIn() {
	const [error, setError] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	const { signIn } = useAuth();

	const handleSubmit = async (data: FormData) => {
		const userData = {
			email: (data.get('email') || '') as string,
			password: (data.get('password') || '') as string,
		};

		try {
			setIsLoading(true);
			await signIn(userData);
		} catch (error: any) {
			console.log(error.message);
			if (error.message === 'Invalid credentials') {
				setError('Email and password do not match!');
			} else {
				setError(
					'Could not sign in right now. Please try again later!'
				);
			}
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div>
			<BaseCard
				title='Sign into your account'
				cardStyles='shadow-xl'
			>
				<form
					className='min-w-full'
					action={handleSubmit}
				>
					<div className='mt-2 mb-4'>
						<FormInput label='Email'>
							<input
								type='text'
								id='email'
								name='email'
								className={
									'input input-bordered w-full max-w-xs text-base-content' +
									(!!error ? ' border-2 border-error' : '')
								}
							/>
						</FormInput>
						<FormInput label='Password'>
							<input
								type='password'
								id='password'
								name='password'
								className={
									'input input-bordered w-full max-w-xs text-base-content' +
									(!!error ? ' border-2 border-error' : '')
								}
							/>
						</FormInput>
					</div>
					{error && (
						<div className='flex justify-start'>
							<div className='badge badge-error'>
								{error}
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									className='inline-block w-4 h-4 stroke-current cursor-pointer'
									onClick={() => setError('')}
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
							'Sign In'
						) : (
							<span className='loading loading-dots loading-lg text-base-100'></span>
						)}
					</button>
				</form>
				<div className='py-2'>
					Not yet a member?{' '}
					<Link
						href='/sign-up'
						className='link link-primary'
					>
						Sign up now!
					</Link>
				</div>
			</BaseCard>
		</div>
	);
}

export default SignIn;
