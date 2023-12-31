import React from 'react';

import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '../api/auth/[...nextauth]/route';

const AuthLayout = async ({ children }: { children: React.ReactNode }) => {
	const session = await getServerSession(authOptions);

	if (session) redirect('/dashboard');

	return (
		<section className='flex justify-center items-center py-20 min-h-full bg-gradient-to-r from-accent to-success px-2 sm:px-0'>
			{children}
		</section>
	);
};

export default AuthLayout;
