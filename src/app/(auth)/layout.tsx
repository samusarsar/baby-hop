import React from 'react';

function AuthLayout({ children }: { children: React.ReactNode }) {
	return (
		<section>
			<div className='bg-slate-100'>{children}</div>
		</section>
	);
}

export default AuthLayout;
