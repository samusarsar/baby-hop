import connect from '@/lib/connect-db';
import User from '@/models/User';
import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import { UserCredentials } from '@/common/types';
import { SessionStrategy } from 'next-auth';

export const authOptions = {
	providers: [
		CredentialsProvider({
			name: 'credentials',
			credentials: {},

			async authorize(credentials) {
				const { email, password } = credentials as UserCredentials;

				try {
					await connect();

					const user = await User.findOne({ email });

					if (!user) {
						return null;
					}

					const isPasswordCorrect = await bcrypt.compare(
						password,
						user.password
					);

					if (!isPasswordCorrect) {
						return null;
					}

					return user;
				} catch (error) {
					console.log('Error', error);
				}
			},
		}),
	],
	session: {
		strategy: 'jwt' as SessionStrategy,
	},
	secret: process.env.NEXTAUTH_SECRET,
	pages: {
		signIn: '/sign-in',
	},
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
