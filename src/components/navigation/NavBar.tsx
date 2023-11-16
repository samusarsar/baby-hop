'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import UserMenu from './UserMenu';

const NavBar = () => {
	const { signedIn, userData } = useSelector(
		(state: RootState) => state.auth
	);

	return (
		<div className='drawer'>
			<input
				id='my-drawer-3'
				type='checkbox'
				className='drawer-toggle'
			/>
			<div className='drawer-content flex flex-col'>
				<div className='navbar bg-base-300 min-h-fit md:px-6 lg:px-8'>
					<div className='navbar-start'>
						<div className='flex-none lg:hidden'>
							<label
								htmlFor='my-drawer-3'
								aria-label='open sidebar'
								className='btn btn-square btn-ghost'
							>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									className='inline-block w-6 h-6 stroke-current'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M4 6h16M4 12h16M4 18h16'
									></path>
								</svg>
							</label>
						</div>
						<a
							href='/'
							className='btn btn-ghost text-xl h-fit hidden lg:block'
						>
							<Image
								alt='BabyHop Logo'
								src='/logo.png'
								width={80}
								height={80}
								priority={true}
							/>
						</a>
					</div>
					<div className='navbar-center'>
						<ul className='menu menu-horizontal px-1 hidden lg:flex'>
							<li>
								<Link href='/find'>Find</Link>
							</li>
							<li>
								<Link href='/become'>Become</Link>
							</li>
							<li>
								<Link href='/about'>About</Link>
							</li>
						</ul>
						<a
							href='/'
							className='btn btn-ghost text-xl h-fit lg:hidden'
						>
							<Image
								alt='BabyHop Logo'
								src='/logo.png'
								width={80}
								height={80}
								priority={true}
							/>
						</a>
					</div>
					<div className='navbar-end'>
						{signedIn ? (
							<UserMenu userData={userData} />
						) : (
							<a
								href='/sign-in'
								className='btn btn-accent'
							>
								Sign In
							</a>
						)}
						<div className='hidden md:contents'>
							<ThemeSwitcher />
						</div>
					</div>
				</div>
			</div>
			<div className='drawer-side z-50'>
				<label
					htmlFor='my-drawer-3'
					aria-label='close sidebar'
					className='drawer-overlay'
				></label>

				<ul className='menu p-4 w-80 min-h-full bg-base-200'>
					<li className='py-3 px-1'>
						<div className='contents md:hidden'>
							<ThemeSwitcher />
						</div>
					</li>
					<li>
						<Link href='/find'>Find</Link>
					</li>
					<li>
						<Link href='/become'>Become</Link>
					</li>
					<li>
						<Link href='/about'>About</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default NavBar;
