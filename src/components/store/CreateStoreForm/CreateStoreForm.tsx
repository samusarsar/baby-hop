'use client';

import FormInput from '@/components/ui/FormInput';
import { RootState } from '@/store/store';
import { setupStore } from '@/utils/stores.utils';
import React from 'react';
import { useSelector } from 'react-redux';

const CreateStoreForm = () => {
	const {
		userData: { username },
	} = useSelector((state: RootState) => state.auth);

	return (
		<div className='flex flex-col w-full items-center py-10'>
			<h1 className='text-4xl font-bold'>Set up your store!</h1>
			<form action={(formData) => setupStore(username, formData)}>
				<div className='flex flex-col p-4 md:grid md:grid-cols-6 max-w-3xl md:gap-6'>
					<div className='col-span-3'>
						<div className='badge badge-accent badge-lg mb-4 md:mb-0'>
							Store Info
						</div>
						<FormInput label='Username:'>
							<input
								type='text'
								id='username'
								name='username'
								defaultValue={username}
								className={
									'input input-bordered text-base-content'
								}
								disabled
							/>
						</FormInput>
						<FormInput label='Store Name:'>
							<input
								type='text'
								id='storeName'
								name='storeName'
								defaultValue={username}
								className={
									'input input-bordered text-base-content'
									// (error ? ' border-2 border-error' : '')
								}
							/>
						</FormInput>
						<FormInput label='About my store:'>
							<textarea
								id='about'
								name='about'
								rows={4}
								className={
									'textarea textarea-bordered text-base-content'
									// (error ? ' border-2 border-error' : '')
								}
							/>
						</FormInput>
						<div className='form-control text-start'>
							<label className='label cursor-pointer gap-2'>
								<span className='label-text text-neutral-content'>
									I can provide delivery and pickup of my
									products to my customers.
								</span>
								<input
									type='checkbox'
									id='doesDeliver'
									name='doesDeliver'
									className='checkbox checkbox-accent'
								/>
							</label>
						</div>
						<select
							className='select select-accent'
							defaultValue='default'
							id='brandColor'
							name='brandColor'
						>
							<option
								value='default'
								disabled
							>
								Pick a brand color for your store:
							</option>
							<option value='blue'>Blue</option>
							<option value='pink'>Pink</option>
							<option value='purple'>Purple</option>
							<option value='green'>Green</option>
							<option value='orange'>Orange</option>
							<option value='yellow'>Yellow</option>
						</select>
						<div className='divider divider-accent md:hidden'></div>
					</div>
					<div className='col-span-3'>
						<div className='badge badge-accent badge-lg mb-4 md:mb-0'>
							Store Address
						</div>
						<FormInput label='Country:'>
							<input
								type='text'
								id='country'
								name='country'
								className={
									'input input-bordered text-base-content'
									// (error ? ' border-2 border-error' : '')
								}
							/>
						</FormInput>
						<FormInput label='City:'>
							<input
								type='text'
								id='city'
								name='city'
								className={
									'input input-bordered text-base-content'
									// (error ? ' border-2 border-error' : '')
								}
							/>
						</FormInput>
						<FormInput label='Street name:'>
							<input
								type='text'
								id='streetName'
								name='streetName'
								className={
									'input input-bordered text-base-content'
									// (error ? ' border-2 border-error' : '')
								}
							/>
						</FormInput>
						<FormInput label='Street number:'>
							<input
								type='text'
								id='streetNumber'
								name='streetNumber'
								className={
									'input input-bordered text-base-content'
									// (error ? ' border-2 border-error' : '')
								}
							/>
						</FormInput>
						<FormInput label='Additional comments:'>
							<textarea
								id='additionalComments'
								name='additionalComments'
								rows={4}
								className={
									'textarea textarea-bordered text-base-content'
									// (error ? ' border-2 border-error' : '')
								}
							/>
						</FormInput>
					</div>
				</div>
				<button className='btn btn-accent btn-block'>Set Up</button>
			</form>
		</div>
	);
};

export default CreateStoreForm;
