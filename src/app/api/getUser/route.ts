import connect from '@/lib/connect-db';
import User from '@/models/User';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (req: NextRequest) => {
	try {
		await connect();

		const { email } = await req.json();

		const user = await User.findOne({ email });

		return NextResponse.json(user);
	} catch (error: any) {
		return NextResponse.json(
			{ message: 'There was an error fetching user data!' },
			{ status: 500 }
		);
	}
};
