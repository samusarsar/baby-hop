'use client';

import ProfileCard from '@/components/dashboard/profile/ProfileCard';
import ProfileTabs from '@/components/dashboard/profile/ProfileTabs';
import React from 'react';

const Profile = () => {
	return (
		<div className='w-full min-h-full px-4'>
			<div className='flex flex-col md:grid md:grid-cols-6 md:items-start w-full min-h-full gap-4'>
				<div className='col-span-2'>
					<ProfileCard />
				</div>
				<div className='col-span-4'>
					<ProfileTabs />
				</div>
			</div>
		</div>
	);
};

export default Profile;
