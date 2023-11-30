'use client';

import useAuth from '@/hooks/useAuth';
import { RootState } from '@/store/store';
import { deleteUser } from '@/utils/users.utils';
import React from 'react';
import { FaPen } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const DetailsTab = () => {
	const { userData } = useSelector((state: RootState) => state.auth);

	const { signOut } = useAuth();

	const handleOpenDeleteModal = () => {
		(
			document.getElementById('delete-account-modal') as HTMLDialogElement
		).showModal();
	};

	const handleDeleteUser = async () => {
		try {
			await deleteUser(userData.email);
			await signOut();
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className='flex flex-col flex-grow gap-4'>
			<div className='badge glass badge-lg rounded-md my-2'>
				Account Details:
			</div>
			<div className='grid grid-cols-2 lg:grid-cols-4 place-items-center'>
				<p className='w-full p-1 font-bold bg-base-200'>First Name:</p>
				<p className='w-full p-1'>{userData.firstName}</p>
				<p className='w-full p-1 font-bold bg-base-200'>Last Name:</p>
				<p className='w-full p-1'>{userData.lastName}</p>
				<p className='w-full p-1 font-bold bg-base-200'>Username:</p>
				<p className='w-full p-1'>{userData.username}</p>
				<p className='w-full p-1 font-bold bg-base-200'>Email:</p>
				<p className='w-full p-1'>{userData.email}</p>
				<p className='w-full p-1 font-bold bg-base-200'>
					Date of Birth:
				</p>
				<p className='w-full p-1'>put DoB here</p>
				<p className='w-full p-1 font-bold bg-base-200'>
					Member since:
				</p>
				<p className='w-full p-1'>
					{new Date(userData.createdAt).toLocaleDateString()}
				</p>
			</div>
			<div className='badge glass badge-lg rounded-md my-2'>Roles:</div>
			<div className='flex flex-wrap gap-4'>
				<div className='badge badge-info badge-lg hover:scale-110 transition-all'>
					Hopper
				</div>
				<div className='badge badge-accent badge-lg hover:scale-110 transition-all'>
					Babyssistant
				</div>
				<div className='badge badge-warning badge-lg hover:scale-110 transition-all'>
					Admin
				</div>
			</div>
			<div className='badge glass badge-lg rounded-md my-2'>
				Settings:
			</div>
			<div className='flex flex-col gap-4'>
				<button className='btn btn-outline w-full sm:btn-wide'>
					<FaPen />
					Edit Details
				</button>
				<button
					className='btn btn-outline btn-error w-full sm:btn-wide'
					onClick={handleOpenDeleteModal}
				>
					<FaPen />
					Delete Account
				</button>
				<dialog
					id='delete-account-modal'
					className='modal'
				>
					<div className='modal-box border-2 border-error'>
						<h3 className='font-bold text-lg text-error'>
							Attention!
						</h3>
						<p className='py-4'>
							Are you sure you want to delete your BabyHop
							account? This is permanently delete all of your user
							data, history, and details.
						</p>
						<div className='modal-action'>
							<div className='flex gap-2'>
								<button
									className='btn btn-error'
									onClick={handleDeleteUser}
								>
									Delete
								</button>
								<form method='dialog'>
									<button className='btn'>Cancel</button>
								</form>
							</div>
						</div>
					</div>
				</dialog>
			</div>
		</div>
	);
};

export default DetailsTab;
