import Link from 'next/link';
import React from 'react';
import { FaCalendarCheck, FaHome, FaUser } from 'react-icons/fa';
import { FaArrowRightToBracket } from 'react-icons/fa6';

const MiniDashboardNav = () => {
	return (
		<div className='flex sm:hidden justify-center items-center p-4 fixed bottom-0 w-full rounded-lg'>
			<ul className='menu menu-horizontal bg-base-300 rounded-box'>
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

				<button className='btn btn-error'>
					<Link href={'/dashboard'}>
						<FaArrowRightToBracket size={25} />
					</Link>
				</button>
			</ul>
		</div>
	);
};

export default MiniDashboardNav;
