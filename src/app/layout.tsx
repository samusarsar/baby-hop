import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';
import NavBar from '@/components/navigation/NavBar';
import AuthProvider from '../components/providers/AuthProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'BabyHop',
	description: 'This is the official BabyHop platform!',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<NavBar />
				<main className='min-h-screen bg-light dark:bg-dark dark:text-white'>
					<AuthProvider>{children}</AuthProvider>
				</main>
			</body>
		</html>
	);
};

export default RootLayout;
