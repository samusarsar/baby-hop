'use client';

import { RootState } from '@/store/store';
import React from 'react';
import { useSelector } from 'react-redux';

const StoreHeader = () => {
	const { userData } = useSelector((state: RootState) => state.auth);

	return (
		<div className='w-full flex justify-start items-center bg-blue p-6 gap-2'>
			<div className='avatar'>
				<div className='w-32 rounded border-2'>
					<img src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg' />
				</div>
			</div>
			<div className='flex flex-col gap-2'>
				<h2 className=' text-4xl font-bold z-50'>{userData.storeId}</h2>
				<p>
					{userData.firstName} {userData.lastName}
				</p>
			</div>
		</div>
	);
};

export default StoreHeader;
