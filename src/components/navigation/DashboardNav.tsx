'use client';

import Link from 'next/link';
import React from 'react';
import { FaCalendarCheck, FaHome, FaUser } from 'react-icons/fa';
import { FaArrowRightToBracket } from 'react-icons/fa6';

const DashboardNav = () => {
	return (
		<div className='hidden sm:flex flex-col h-full justify-between items-center p-4 bg-base-300'>
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
				<li>
					<Link href={'/dashboard/bookings'}>
						<FaCalendarCheck size={20} />
						My Bookings
					</Link>
				</li>
			</ul>
			<Link
				href={'/dashboard'}
				className='w-full'
			>
				<button className='btn btn-error w-full'>
					<FaArrowRightToBracket size={20} />
					Log Out
				</button>
			</Link>
		</div>
	);
};

export default DashboardNav;
