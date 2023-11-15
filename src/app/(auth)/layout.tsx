import React from 'react';

function AuthLayout({ children }: { children: React.ReactNode }) {
	return (
		<section className='pt-20 flex justify-center items-center'>
			{children}
		</section>
	);
}

export default AuthLayout;
