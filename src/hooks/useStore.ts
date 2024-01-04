import { setupStore } from '@/utils/stores.utils';
import { useRouter } from 'next/navigation';
import useAuth from './useAuth';

const useStoreManagement = () => {
	const { updateAndSyncUserData } = useAuth();

	const router = useRouter();

	const createStore = async (username: string, storeData: FormData) => {
		const userUpdates = await setupStore(username, storeData);
		await updateAndSyncUserData('username', username, userUpdates);

		router.replace('/dashboard/store');
	};

	return {
		createStore,
	};
};

export default useStoreManagement;
