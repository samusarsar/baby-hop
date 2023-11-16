import { NewUserData, UserCredentials } from '@/common/types';
import { signInSuccess, signOutSuccess } from '@/store/slices/authSlice';
import { checkIfUserExists, createUser, getUser } from '@/utils/users.utils';
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
		let resUserExists;
		try {
			resUserExists = await checkIfUserExists(userData.email);
		} catch (error) {
			throw new Error(
				'Could not complete registration. Please try again later!'
			);
		}

		const { user } = await resUserExists.json();

		if (user) throw new Error('User already exists!');

		let resUserRegistered;

		try {
			resUserRegistered = await createUser(userData);

			if (!resUserRegistered.ok) {
				throw new Error();
			}
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
			const resUserData = await getUser(userCredentials.email);
			const userData = await resUserData.json();

			dispatch(signInSuccess(userData));
			router.replace('/dashboard');
		}
	};

	const signOut = async () => {
		await signOutNextAuth();

		dispatch(signOutSuccess());
		router.replace('/');
	};

	return {
		signUp,
		signIn,
		signOut,
	};
};

export default useAuth;
