'use server';

import { NewUserData, UserData } from '@/common/types';
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

export const checkIfUserExists = async (
	key: 'email' | 'username',
	value: string
) => {
	await connect();

	return await User.findOne({
		[key]: value,
	}).select('_id');
};

export const getUser = async (key: 'email' | 'username', value: string) => {
	await connect();

	const res = await User.findOne({
		[key]: value,
	});

	const userData: UserData = {
		id: res._id.toString(),
		firstName: res.firstName,
		lastName: res.lastName,
		username: res.username,
		email: res.email,
		createdAt: res.createdAt.toString(),
		updatedAt: res.updatedAt.toString(),
	};

	if (res.hasStore) {
		userData.hasStore = res.hasStore;
		userData.storeId = res.storeId.toString();
	}

	return userData;
};

export const deleteUser = async (key: 'email' | 'username', value: string) => {
	await connect();

	await User.deleteOne({ [key]: value });
};

export const updateUser = async (
	key: 'email' | 'username',
	value: string,
	updates: { [key: string]: any }
) => {
	await connect();

	await User.updateOne({ [key]: value }, updates);
};
