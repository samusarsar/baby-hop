import { RootState } from '@/store/store';
import Link from 'next/link';
import React from 'react';
import { FaEnvelope } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const ProfileCard = () => {
	const { userData } = useSelector((state: RootState) => state.auth);

	const initials =
		userData.firstName[0].toUpperCase() +
		userData.lastName[0].toUpperCase();

	return (
		<div className='card bg-base-200 p-10 w-full flex items-center shadow-md'>
			<div
				className={
					'avatar ' + (!userData.avatarUrl ? 'placeholder' : '')
				}
			>
				<div className='bg-success text-success-content w-36 rounded-full border-1'>
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
			<div className='flex flex-col w-full items-center pt-3'>
				<p className='text-lg font-bold'>
					{userData.firstName + ' ' + userData.lastName}
				</p>
				<p className='text-lg'>@{userData.username}</p>
			</div>
			<div className='divider'></div>
			<div className='flex flex-col w-full items-center'>
				<Link href={`mailto:${userData.email}`}>
					<div className='flex items-center gap-2'>
						<FaEnvelope />
						<p>{userData.email}</p>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default ProfileCard;
