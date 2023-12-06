'use client';

import useAuth from '@/hooks/useAuth';
import { RootState } from '@/store/store';
import Link from 'next/link';
import React from 'react';
import { FaCalendarCheck, FaHome, FaStore, FaUser } from 'react-icons/fa';
import { FaArrowRightToBracket } from 'react-icons/fa6';
import { useSelector } from 'react-redux';

const DashboardNav = () => {
	const {
		userData: { hasStore },
	} = useSelector((state: RootState) => state.auth);

	const { signOut } = useAuth();

	return (
		<div className='hidden sm:flex flex-col h-full justify-between items-center p-4 bg-base-300 shadow-md'>
			<ul className='menu bg-base-200 rounded-box'>
				<li>
					<Link href={'/dashboard'}>
						<FaHome size={20} />
						Dashboard
					</Link>
				</li>
				<li>
					<Link href={'/dashboard/profile'}>
						<FaUser size={20} />
						My Profile
					</Link>
				</li>
				{hasStore && (
					<li>
						<Link
							href={'/dashboard/store'}
							className='h-full'
						>
							<FaStore size={20} />
							My Store
						</Link>
					</li>
				)}
				<li>
					<Link href={'/dashboard/bookings'}>
						<FaCalendarCheck size={20} />
						My Bookings
					</Link>
				</li>
			</ul>

			<button
				className='btn btn-error w-full'
				onClick={signOut}
			>
				<FaArrowRightToBracket size={20} />
				Log Out
			</button>
		</div>
	);
};

export default DashboardNav;
