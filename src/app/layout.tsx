import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';
import NavBar from '@/components/navigation/NavBar';
import Providers from '../components/providers/Providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'BabyHop',
	description: 'This is the official BabyHop platform!',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html
			lang='en'
			className='h-full m-0'
		>
			<body className={`${inter.className} h-full`}>
				<Providers>
					<NavBar />
					<main className='h-[calc(100%-87px)]'>{children}</main>
				</Providers>
			</body>
		</html>
	);
};

export default RootLayout;
