'use server';

import { NewUserData } from '@/common/types';
import connect from '@/lib/connect-db';
import User from '@/models/User';
import bcrypt from 'bcryptjs';

export const createUser = async (userData: NewUserData) => {
	await connect();

	const { firstName, lastName, username, email, password } = await userData;

	const hashedPassword = await bcrypt.hash(password, 10);
	await User.create({
		firstName,
		lastName,
		username,
		email,
		password: hashedPassword,
	});
};

export const checkIfUserExists = async (email: string) => {
	await connect();

	return await User.findOne({
		email,
	}).select('_id');
};

export const getUser = async (email: string) => {
	await connect();

	const res = await User.findOne({
		email,
	});

	const userData = {
		id: res._id.toString(),
		firstName: res.firstName,
		lastName: res.lastName,
		username: res.username,
		email: res.email,
		createdAt: res.createdAt.toString(),
		updatedAt: res.updatedAt.toString(),
	};

	return userData;
};
