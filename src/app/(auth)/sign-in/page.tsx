'use client';

import BaseCard from '@/components/ui/BaseCard';
import { useRouter } from 'next/navigation';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { signIn } from 'next-auth/react';

function SignIn() {
	const [userData, setUserData] = useState({
		email: '',
		password: '',
	});
	const [error, setError] = useState('');

	const router = useRouter();

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setUserData({
			...userData,
			[e.target.id]: e.target.value,
		});
	};

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();

		try {
			const res = await signIn('credentials', {
				...userData,
				redirect: false,
			});

			if (res?.error) {
				setError('Invalid credentials');
			} else {
				setError('');
				router.replace('/dashboard');
			}
		} catch (error) {
			setError('Could not sign in right now. Please try again later!');
		}
	};

	return (
		<div>
			<BaseCard title='SIGN IN'>
				<form
					className='min-w-full'
					onSubmit={handleSubmit}
				>
					<div className='my-2'>
						<div className='flex flex-col gap-1'>
							<label htmlFor='email'>Email:</label>
							<input
								type='text'
								name='email'
								id='email'
								className='text-black'
								onChange={handleChange}
							/>
						</div>
						<div className='flex flex-col gap-1'>
							<label htmlFor='password'>Password:</label>
							<input
								type='text'
								name='password'
								id='password'
								className='text-black'
								onChange={handleChange}
							/>
						</div>
					</div>
					{error && <div className='text-red'>{error}</div>}
					<button className='p-1 w-full rounded-md bg-yellow text-black hover:bg-orange hover:text-white transition-all'>
						Sign In
					</button>
				</form>
				<div className='py-2'>
					Not yet a member?{' '}
					<a
						href='/sign-up'
						className='text-purple hover:brightness-150'
					>
						Sign up now!
					</a>
				</div>
			</BaseCard>
		</div>
	);
}

export default SignIn;
