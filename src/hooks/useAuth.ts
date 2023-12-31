import { NewUserData, UserCredentials } from '@/common/types';
import {
	signInSuccess,
	signOutSuccess,
	updateUserData,
} from '@/store/slices/authSlice';
import {
	checkIfUserExists,
	createUser,
	getUser,
	updateUser,
} from '@/utils/users.utils';
import {
	signIn as signInNextAuth,
	signOut as signOutNextAuth,
} from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';

const useAuth = () => {
	const dispatch = useDispatch();
	const router = useRouter();

	const signUp = async (userData: NewUserData) => {
		let emailExists;
		let usernameExists;
		try {
			emailExists = await checkIfUserExists('email', userData.email);
			usernameExists = await checkIfUserExists(
				'username',
				userData.username
			);
		} catch (error) {
			throw new Error(
				'Could not complete registration. Please try again later!'
			);
		}

		if (emailExists)
			throw new Error('User with this email already exists!');
		if (usernameExists) throw new Error('Username is taken!');

		try {
			await createUser(userData);
			await signIn({
				email: userData.email,
				password: userData.password,
			});
		} catch (error) {
			throw new Error(
				'Could not complete registration. Please try again later!'
			);
		}
	};

	const signIn = async (userCredentials: UserCredentials) => {
		const res = await signInNextAuth('credentials', {
			...userCredentials,
			redirect: false,
		});

		if (res?.error) {
			throw new Error('Invalid credentials');
		} else {
			const userData = await getUser('email', userCredentials.email);

			router.replace('/dashboard');
			dispatch(signInSuccess(userData));
		}
	};

	const signOut = async () => {
		router.replace('/..');
		await signOutNextAuth({ redirect: false });
		dispatch(signOutSuccess());
	};

	const updateAndSyncUserData = async (
		key: 'email' | 'username',
		value: string,
		updates: { [key: string]: any }
	) => {
		await updateUser(key, value, updates);
		const updatedUserData = await getUser(key, value);
		dispatch(updateUserData(updatedUserData));
	};

	return {
		signUp,
		signIn,
		signOut,
		updateAndSyncUserData,
	};
};

export default useAuth;
