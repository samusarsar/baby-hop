'use client';

import { RootState } from '@/store/store';
import Image from 'next/image';
import React, { Ref, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

import styles from './TopHero.module.css';
import { staggerAnimation } from '@/utils/animation.utils';

const TopHero = () => {
	const { isDark } = useSelector((state: RootState) => state.theme);

	useEffect(() => {
		const elementsToAnimate = document.querySelectorAll(
			'.' + styles.hidden
		);

		staggerAnimation(styles.show, elementsToAnimate);
	}, []);

	return (
		<section>
			<div className='hero min-h-screen bg-gradient-to-r from-accent to-success'>
				<div className='hero-overlay bg-opacity-50'></div>
				<div
					className={
						'hero-content w-full text-center text-neutral-content'
					}
				>
					<div className='max-w-md flex flex-col gap-5 xl:gap-8 items-center'>
						<h1
							className={`mb-5 text-5xl 2xl:text-7xl font-bold ${styles.hidden}`}
						>
							Welcome to{' '}
							<div className='flex justify-center items-center'>
								<Image
									src={
										isDark
											? '/logo_text.png'
											: '/logo_dark_text.png'
									}
									alt='logo'
									height={50}
									width={300}
								></Image>
							</div>
						</h1>
						<div className={styles.hidden}>
							<p className='mb-5 text-lg 2xl:text-2xl bg-neutral bg-opacity-30 p-3 rounded-xl'>
								Whether on a weekend getaway with your little
								one or a longer term relocation - BabyHop&apos;s
								network of dedicated Babyssistants will have you
								and your tiny boss covered for the gear and
								equipment you need!
							</p>
							<form>
								<label
									htmlFor='default-search'
									className='mb-2 text-sm sr-only'
								>
									Search
								</label>
								<div className='join'>
									<input
										className='input input-bordered input-accent join-item focus:aria-none'
										placeholder='Search for gear'
									/>
									<div className='indicator'>
										<button className='btn btn-primary join-item'>
											Find Gear
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TopHero;
