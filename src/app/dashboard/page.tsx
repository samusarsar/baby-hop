'use client';

import { signOut } from 'next-auth/react';

const Dashboard = () => {
	return (
		<div>
			Dashboard
			<button onClick={() => signOut()}>Log Out</button>
		</div>
	);
};

export default Dashboard;
