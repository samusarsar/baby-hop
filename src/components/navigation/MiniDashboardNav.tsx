'use client';

import useAuth from '@/hooks/useAuth';
import { RootState } from '@/store/store';
import Link from 'next/link';
import React, { useState } from 'react';
import {
	FaAngleDown,
	FaAngleUp,
	FaCalendarCheck,
	FaHome,
	FaStore,
	FaUser,
} from 'react-icons/fa';
import { FaArrowRightToBracket } from 'react-icons/fa6';
import { useSelector } from 'react-redux';

const MiniDashboardNav = () => {
	const [dropdownIsOpen, setDropdownIsOpen] = useState(false);

	const {
		userData: { hasStore },
	} = useSelector((state: RootState) => state.auth);

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
				{hasStore ? (
					<li
						className={`dropdown dropdown-top dropdown-end`}
						onFocus={() => setDropdownIsOpen(true)}
						onBlur={() => setDropdownIsOpen(false)}
					>
						<div
							tabIndex={0}
							role='button'
							className='h-full'
						>
							{dropdownIsOpen ? (
								<FaAngleDown size={25} />
							) : (
								<FaAngleUp size={25} />
							)}
						</div>
						<ul
							tabIndex={0}
							className='dropdown-content z-[1] menu p-2 shadow bg-base-300 rounded-box mb-3'
						>
							<li>
								<Link
									href={'/dashboard/store'}
									className='h-full'
								>
									<FaStore size={25} />
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
						</ul>
					</li>
				) : (
					<li>
						<Link
							href={'/dashboard/bookings'}
							className='h-full'
						>
							<FaCalendarCheck size={25} />
						</Link>
					</li>
				)}

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
