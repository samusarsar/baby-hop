'use server';

import connect from '@/lib/connect-db';
import Store from '@/models/Store';
import { updateUserData } from './users.utils';

export const setupStore = async (username: string, storeData: FormData) => {
	await connect();

	const newStoreData = {
		username: username,
		storeName: storeData.get('storeName'),
		about: storeData.get('about'),
		doesDeliver: storeData.get('doesDeliver') === 'on',
		brandColor: storeData.get('brandColor'),
		address: {
			country: storeData.get('country'),
			city: storeData.get('city'),
			streetName: storeData.get('streetName'),
			streetNumber: storeData.get('streetNumber'),
			additionalComments: storeData.get('additionalComments'),
		},
	};

	const storeRes = await Store.create(newStoreData);

	const updates = { hasStore: true, storeId: storeRes._id };

	await updateUserData(username, updates);
};
