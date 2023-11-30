'use client';

import useAuth from '@/hooks/useAuth';
import { RootState } from '@/store/store';
import { useSelector } from 'react-redux';

const Dashboard = () => {
	const { userData } = useSelector((state: RootState) => state.auth);

	const { signOut } = useAuth();

	return (
		<div className='w-full min-h-full px-4'>
			Dashboard
			<p>signed in as {userData.username}</p>
			<button onClick={signOut}>Log Out</button>
		</div>
	);
};

export default Dashboard;
