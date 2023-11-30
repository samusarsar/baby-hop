'use client';

import DashboardNav from '@/components/navigation/DashboardNav';
import MiniDashboardNav from '@/components/navigation/MiniDashboardNav';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

const DashboardLayout = ({ children }: { children: ReactNode }) => {
	const location = usePathname();
	const params = location.split('/');

	const currLocation =
		params[params.length - 1][0].toUpperCase() +
		params[params.length - 1].slice(1);

	return (
		<section className='flex h-full w-full'>
			<DashboardNav />
			<div className='flex flex-col flex-grow'>
				<div className='text-sm breadcrumbs p-4 min-h-fit overflow-hidden'>
					<ul>
						<li>
							<Link href={'/'}>Home</Link>
						</li>
						<li>
							<Link href={'/dashboard'}>Dashboard</Link>
						</li>
						{params.length > 2 && (
							<li>
								<Link href={location}>{currLocation}</Link>
							</li>
						)}
					</ul>
					<div className='divider my-1' />
				</div>
				<div className='max-w-6xl overflow-y-auto pb-4 flex-grow'>
					{children}
					<MiniDashboardNav />
				</div>
			</div>
		</section>
	);
};

export default DashboardLayout;
