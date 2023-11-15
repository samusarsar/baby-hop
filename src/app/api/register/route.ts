import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import connect from '@/lib/connect-db';
import User from '@/models/User';

export const POST = async (req: NextRequest) => {
	try {
		await connect();

		const { firstName, lastName, username, email, password } =
			await req.json();

		const hashedPassword = await bcrypt.hash(password, 10);
		await User.create({
			firstName,
			lastName,
			username,
			email,
			password: hashedPassword,
		});

		return NextResponse.json(
			{ message: 'User registered.' },
			{ status: 201 }
		);
	} catch (error: any) {
		console.error(error);
		return NextResponse.json(
			{ message: 'An error occurred while registering the user.' },
			{ status: 500 }
		);
	}
};
