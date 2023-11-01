import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'BabyHop',
	description: 'This is the official BabyHop platform!',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<nav className='flex justify-center min-w-full bg-gray-light dark:bg-black dark:text-white'>
					<ul className='flex min-w-full justify-evenly'>
						<li>hi</li>
						<li>hi</li>
					</ul>
				</nav>
				<main className='bg-light dark:bg-dark dark:text-white'>
					{children}
				</main>
			</body>
		</html>
	);
};

export default RootLayout;
