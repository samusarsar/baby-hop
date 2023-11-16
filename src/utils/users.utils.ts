import { NewUserData } from '@/common/types';

export const createUser = async (userData: NewUserData) => {
	return await fetch('api/register', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(userData),
	});
};

export const checkIfUserExists = async (email: string) => {
	return await fetch('api/userExists', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ email }),
	});
};

export const getUser = async (email: string) => {
	return await fetch('api/getUser', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ email }),
	});
};
