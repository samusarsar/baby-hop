import { UserData } from '@/common/types';
import useAuth from '@/hooks/useAuth';
import React from 'react';
import Link from 'next/link';

const UserMenu = ({ userData }: { userData: UserData }) => {
	const { signOut } = useAuth();

	const initials =
		userData.firstName[0].toUpperCase() +
		userData.lastName[0].toUpperCase();

	return (
		<div className='dropdown dropdown-bottom dropdown-end'>
			<label tabIndex={0}>
				<div
					className={
						'avatar ' + (!userData.avatarUrl ? 'placeholder' : '')
					}
				>
					<div className='bg-success text-success-content w-12 rounded-full border-1 cursor-pointer'>
						{userData.avatarUrl ? (
							<img
								src={userData.avatarUrl}
								alt={`${userData.username} avatar`}
							/>
						) : (
							<span>{initials}</span>
						)}
					</div>
				</div>
			</label>
			<ul
				tabIndex={0}
				className='dropdown-content z-[1] menu p-2 shadow-lg bg-base-200 rounded-box w-52 mt-2'
			>
				<li className='menu-title'>{userData.username}</li>
				<li>
					<Link href={`/dashboard`}>Dashboard</Link>
				</li>
				<li>
					<Link href={`/dashboard/profile`}>My Profile</Link>
				</li>
				{userData.hasStore && (
					<li>
						<Link href={`/dashboard/store`}>My Store</Link>
					</li>
				)}
				<li>
					<Link href={`/dashboard/bookings`}>My Bookings</Link>
				</li>
				<li>
					<button
						className='bg-error text-error-content hover:bg-error hover:text-error-content hover:brightness-75'
						onClick={signOut}
					>
						Log Out
					</button>
				</li>
			</ul>
		</div>
	);
};

export default UserMenu;
