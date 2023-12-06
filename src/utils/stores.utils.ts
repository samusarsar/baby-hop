'use server';

import connect from '@/lib/connect-db';
import Store from '@/models/Store';

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
			streetAddress: storeData.get('streetAddress'),
			additionalComments: storeData.get('additionalComments'),
		},
	};

	const storeRes = await Store.create(newStoreData);

	return await { hasStore: true, storeId: storeRes._id };
};
