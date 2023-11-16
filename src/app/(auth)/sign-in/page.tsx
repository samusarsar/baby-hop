'use client';

import BaseCard from '@/components/ui/BaseCard';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import FormInput from '@/components/ui/FormInput';
import useAuth from '@/hooks/useAuth';

function SignIn() {
	const [userData, setUserData] = useState({
		email: '',
		password: '',
	});
	const [error, setError] = useState('');

	const { signIn } = useAuth();

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setUserData({
			...userData,
			[e.target.id]: e.target.value,
		});
	};

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();

		try {
			await signIn(userData);
		} catch (error: any) {
			if (error.message === 'Invalid credentials!') {
				setError('Invalid credentials!');
			} else {
				console.error(error.message);
				setError(
					'Could not sign in right now. Please try again later!'
				);
			}
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
					onSubmit={handleSubmit}
				>
					<div className='mt-2 mb-4'>
						<FormInput
							label='Email'
							isInvalid={!!error}
						>
							<input
								type='text'
								id='email'
								className={
									'input input-bordered w-full max-w-xs text-base-content' +
									(!!error ? ' border-2 border-error' : '')
								}
								onChange={handleChange}
							/>
						</FormInput>
						<FormInput
							label='Password'
							isInvalid={!!error}
						>
							<input
								type='password'
								id='password'
								className={
									'input input-bordered w-full max-w-xs text-base-content' +
									(!!error ? ' border-2 border-error' : '')
								}
								onChange={handleChange}
							/>
						</FormInput>
					</div>
					{error && (
						<div className='text-start text-error'>{error}</div>
					)}
					<button className='btn btn-accent btn-block'>
						Sign In
					</button>
				</form>
				<div className='py-2'>
					Not yet a member?{' '}
					<a
						href='/sign-up'
						className='link link-primary'
					>
						Sign up now!
					</a>
				</div>
			</BaseCard>
		</div>
	);
}

export default SignIn;
