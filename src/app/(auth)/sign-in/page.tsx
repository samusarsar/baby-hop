import BaseCard from '@/components/ui/BaseCard';
import React from 'react';

function SignIn() {
	return (
		<div>
			<BaseCard title='SIGN IN'>
				<form className='min-w-full'>
					<div className='my-2'>
						<div className='flex flex-col gap-1'>
							<label htmlFor='username'>Email:</label>
							<input
								type='text'
								name='username'
								id='username'
							/>
						</div>
						<div className='flex flex-col gap-1'>
							<label htmlFor='username'>Password:</label>
							<input
								type='text'
								name='username'
								id='username'
							/>
						</div>
					</div>
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
