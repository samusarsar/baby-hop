'use client';

import BaseCard from '@/components/ui/BaseCard';
import useAuth from '@/hooks/useAuth';
import {
	isEmailValid,
	isFirstOrLastNameValid,
	isPasswordValid,
	isUsernameValid,
} from '@/utils/validation.utils';
import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React, { ChangeEvent, FocusEvent, FormEvent, useState } from 'react';

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
		generalErr: false,
	});

	const router = useRouter();

	const { signUp } = useAuth();

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setUserData({
			...userData,
			[e.target.id]: e.target.value,
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

		try {
			await signUp(userData);

			setErrors({
				...errors,
				generalErr: false,
			});

			router.replace('/sign-in');
		} catch (error) {
			setErrors({
				...errors,
				generalErr: true,
			});
		}
	};

	return (
		<div>
			<BaseCard title='SIGN UP'>
				<form
					className='min-w-full'
					onSubmit={handleSubmit}
				>
					<div className='my-2'>
						<div className='flex gap-2'>
							<div className='flex flex-col gap-1 my-2'>
								<label htmlFor='firstName'>First Name:</label>
								<input
									type='text'
									name='firstName'
									id='firstName'
									className='text-dark'
									onChange={handleChange}
									onBlur={handleBlur}
								/>
								{errors.firstName && <p>ERR</p>}
							</div>
							<div className='flex flex-col gap-1 my-2'>
								<label htmlFor='lastName'>Last Name:</label>
								<input
									type='text'
									name='lastName'
									id='lastName'
									className='text-dark'
									onChange={handleChange}
									onBlur={handleBlur}
								/>
							</div>
						</div>
						<div className='flex flex-col gap-1 my-2'>
							<label htmlFor='username'>Username:</label>
							<input
								type='text'
								name='username'
								id='username'
								className='text-dark'
								onChange={handleChange}
								onBlur={handleBlur}
							/>
						</div>
						<div className='flex flex-col gap-1 my-2'>
							<label htmlFor='email'>Email:</label>
							<input
								type='email'
								name='email'
								id='email'
								className='text-dark'
								onChange={handleChange}
								onBlur={handleBlur}
							/>
						</div>
						<div className='flex flex-col gap-1 my-2'>
							<label htmlFor='password'>Password:</label>
							<input
								type='text'
								name='password'
								id='password'
								className='text-dark'
								onChange={handleChange}
								onBlur={handleBlur}
							/>
						</div>
					</div>
					<button className='p-1 w-full rounded-md bg-yellow text-black hover:bg-orange hover:text-white transition-all'>
						Create Account
					</button>
				</form>
				<div className='py-2'>
					Already a member?{' '}
					<a
						href='/sign-in'
						className='text-purple hover:brightness-150'
					>
						Sign in now!
					</a>
				</div>
			</BaseCard>
			{errors.generalErr && <p>Errors</p>}
		</div>
	);
}

export default Signup;
