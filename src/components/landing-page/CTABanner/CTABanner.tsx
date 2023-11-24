import { RootState } from '@/store/store';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styles from './CTABanner.module.css';
import { staggerAnimation } from '@/utils/animation.utils';

const CTABanner = () => {
	const { isDark } = useSelector((state: RootState) => state.theme);

	useEffect(() => {
		const imgElementsToAnimate = document.querySelectorAll(
			'.' + styles['hidden-img']
		);
		const textElementsToAnimate = document.querySelectorAll(
			'.' + styles.hidden
		);

		return () => {
			staggerAnimation(styles['show-img'], imgElementsToAnimate);
			staggerAnimation(styles.show, textElementsToAnimate);
		};
	}, []);

	return (
		<section className='overflow-hidden'>
			<div className='gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6'>
				<div className={styles['hidden-img']}>
					{isDark ? (
						<img
							className='w-full'
							src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg'
							alt='dashboard image'
						/>
					) : (
						<img
							className='w-full'
							src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg'
							alt='dashboard image'
						/>
					)}
				</div>
				<div className='mt-4 md:mt-0'>
					<h2
						className={`mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ${styles.hidden}`}
					>
						Join our ecosystem of Babyhoppers and Babyssistants!
					</h2>
					<p
						className={`mb-6 font-light md:text-lg ${styles.hidden}`}
					>
						To find and rent gear you need to simply sign up to
						browse and view all our Babyssistants and their stores.
						If you have available gear at home, you can take the
						next step and become a Babyssistant, setting up your
						very own gear rental business benefitting from the
						exposure and tools on our platform.
					</p>
					<div
						className={`flex flex-col sm:flex-row gap-2 ${styles.hidden}`}
					>
						<Link
							href='/sign-up'
							className='btn btn-accent'
						>
							Sign Up
							<svg
								className='ml-2 -mr-1 w-5 h-5'
								fill='currentColor'
								viewBox='0 0 20 20'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									fillRule='evenodd'
									d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
									clipRule='evenodd'
								></path>
							</svg>
						</Link>
						<Link
							href='/become'
							className='btn btn-neutral btn-outline'
						>
							Become a Babyssistant
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CTABanner;
