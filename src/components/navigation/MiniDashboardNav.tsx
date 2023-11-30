'use client';

import useAuth from '@/hooks/useAuth';
import Link from 'next/link';
import React from 'react';
import { FaCalendarCheck, FaHome, FaUser } from 'react-icons/fa';
import { FaArrowRightToBracket } from 'react-icons/fa6';

const MiniDashboardNav = () => {
	const { signOut } = useAuth();

	return (
		<div className='flex sm:hidden justify-center items-center p-4 sticky bottom-0 w-full rounded-lg'>
			<ul className='menu menu-horizontal bg-base-300 rounded-box shadow-md'>
				<li>
					<Link
						href={'/dashboard'}
						className='h-full'
					>
						<FaHome size={25} />
					</Link>
				</li>
				<li>
					<Link
						href={'/dashboard/profile'}
						className='h-full'
					>
						<FaUser size={25} />
					</Link>
				</li>
				<li>
					<Link
						href={'/dashboard/bookings'}
						className='h-full'
					>
						<FaCalendarCheck size={25} />
					</Link>
				</li>

				<button
					className='btn btn-error'
					onClick={signOut}
				>
					<FaArrowRightToBracket size={25} />
				</button>
			</ul>
		</div>
	);
};

export default MiniDashboardNav;
