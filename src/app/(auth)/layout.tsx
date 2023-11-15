import React from 'react';

import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '../api/auth/[...nextauth]/route';

const AuthLayout = async ({ children }: { children: React.ReactNode }) => {
	const session = await getServerSession(authOptions);

	if (session) redirect('/dashboard');

	return (
		<section className='pt-20 flex justify-center items-center'>
			{children}
		</section>
	);
};

export default AuthLayout;
