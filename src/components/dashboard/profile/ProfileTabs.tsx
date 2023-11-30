import React, { useState } from 'react';
import DetailsTab from './tabs/DetailsTab';

const ProfileTabs = () => {
	const [activeTab, setActiveTab] = useState('details');

	return (
		<div
			role='tablist'
			className='tabs tabs-boxed p-2'
		>
			<input
				type='radio'
				name='details'
				role='tab'
				className='tab'
				aria-label='Details'
				checked={activeTab === 'details'}
				onChange={() => setActiveTab('details')}
			/>
			<div
				role='tabpanel'
				className='tab-content bg-base-100 border-base-300 rounded-box p-6'
			>
				<DetailsTab />
			</div>

			<input
				type='radio'
				name='reviews'
				role='tab'
				className='tab'
				aria-label='Reviews'
				checked={activeTab === 'reviews'}
				onChange={() => setActiveTab('reviews')}
			/>
			<div
				role='tabpanel'
				className='tab-content bg-base-100 border-base-300 rounded-box p-6'
			>
				Tab content 2
			</div>

			<input
				type='radio'
				name='store'
				role='tab'
				className='tab'
				aria-label='Store'
				checked={activeTab === 'store'}
				onChange={() => setActiveTab('store')}
			/>
			<div
				role='tabpanel'
				className='tab-content bg-base-100 border-base-300 rounded-box p-6'
			>
				Tab content 3
			</div>
		</div>
	);
};

export default ProfileTabs;
