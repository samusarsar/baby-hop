// 'use server';

import { NewUserData } from '@/types/types';
import { isUsernameValid } from './validation.utils';

// import User from '@/models/User';
// import connect from '../connect-db';
// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';
// import { useContext } from 'react';

// export const signUpUser = async (formData: FormData) => {
// 	await connect();

// 	throw new Error(2);
// 	const hashedPassword = await bcrypt.hash(
// 		formData.get('password') as string,
// 		10
// 	);

// 	console.log(typeof hashedPassword);
// 	const newUser = {
// 		firstName: formData.get('firstName'),
// 		lastName: formData.get('lastName'),
// 		username: formData.get('username'),
// 		email: formData.get('email'),
// 		password: hashedPassword,
// 		hasStore: false,
// 	};

// 	try {
// 		await User.create(newUser);
// 	} catch (error: any) {
// 		throw new Error('Failed to create user!' + error.message);
// 	}
// };

// export const signInUser = async (formData: FormData) => {
// 	await connect();

// 	const user = await User.findOne({ email: formData.get('email') });

// 	if (!user) throw new Error('There is no user with such email!');

// 	const isPasswordValid = await bcrypt.compare(
// 		formData.get('password') as string,
// 		user.password
// 	);

// 	if (!isPasswordValid) throw new Error('Password is incorrect!');

// 	try {
// 		const token = jwt.sign(
// 			{ id: user._id },
// 			process.env.JWT_SECRET as string
// 		);
// 	} catch (error: any) {
// 		throw new Error('Please add JWT_SECRET to .env');
// 	}

// 	const { password, ...other } = user._doc;

// 	res.cookie('access_token', token, {
// 		httpOnly: false,
// 	})
// 		.status(200)
// 		.json(other);
// };

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
