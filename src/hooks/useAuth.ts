import { NewUserData } from '@/common/types';
import { checkIfUserExists, createUser } from '@/utils/users.utils';

const useAuth = () => {
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

	return {
		signUp,
	};
};

export default useAuth;
