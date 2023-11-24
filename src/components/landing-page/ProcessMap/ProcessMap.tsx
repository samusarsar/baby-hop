import BaseCard from '@/components/ui/BaseCard';
import { staggerAnimation } from '@/utils/animation.utils';
import React, { useEffect } from 'react';
import styles from './ProcessMap.module.css';

const ProcessMap = () => {
	useEffect(() => {
		const elementsToAnimate = document.querySelectorAll(
			'.' + styles.hidden
		);

		staggerAnimation(styles.show, elementsToAnimate);
	}, []);

	return (
		<div className='grid py-8 place-content-center bg-gradient-to-r from-blue from-0% via-green via-50% to-blue to-100%%'>
			<div className={`stats shadow ${styles.hidden}`}>
				<div className='stat bg-info text-info-content glass'>
					<span className='badge badge-outline glass hover:scale-110 hover:badge-neutral'>
						<p className='hover:text-neutral-content'>Step 1:</p>
					</span>
					<div className='stat-value'>Destination</div>
					<div className='text-info-content'>
						Choose a country and city.
					</div>
				</div>
			</div>
			<div className={`flex justify-center ${styles.hidden}`}>
				<div className='h-[100px]'></div>
				<div className='divider divider-horizontal'></div>
				<div className='h-[50px]'></div>
			</div>
			<div className={`stats shadow ${styles.hidden}`}>
				<div className='stat bg-accent text-accent-content glass'>
					<span className='badge badge-outline glass hover:scale-110 hover:badge-neutral'>
						<p className='hover:text-neutral-content'>Step 2:</p>
					</span>
					<div className='stat-value'>Browse</div>
					<div className='text-accent-content'>
						Browse Babyssistants.
					</div>
				</div>
			</div>
			<div className={`flex justify-center ${styles.hidden}`}>
				<div className='h-[100px]'></div>
				<div className='divider divider-horizontal'></div>
				<div className='h-[50px]'></div>
			</div>
			<div className={`stats shadow ${styles.hidden}`}>
				<div className='stat bg-primary text-primary-content'>
					<span className='badge badge-outline glass hover:scale-110 hover:badge-neutral'>
						<p className='hover:text-neutral-content'>Step 3:</p>
					</span>
					<div className='stat-value'>Select</div>
					<div className='text-primary-content'>
						Select the gear you need.
					</div>
				</div>
			</div>
			<div className={`flex justify-center ${styles.hidden}`}>
				<div className='h-[100px]'></div>
				<div className='divider divider-horizontal'></div>
				<div className='h-[50px]'></div>
			</div>
			<div className={`stats shadow ${styles.hidden}`}>
				<div className='stat bg-secondary text-secondary-content'>
					<span className='badge badge-outline glass hover:scale-110 hover:badge-neutral'>
						<p className='hover:text-neutral-content'>Step 4:</p>
					</span>
					<div className='stat-value'>Book</div>
					<div className='text-secondary-content'>
						Pick the date-range.
					</div>
				</div>
			</div>
			<div className={`flex justify-center ${styles.hidden}`}>
				<div className='h-[100px]'></div>
				<div className='divider divider-horizontal'></div>
				<div className='h-[50px]'></div>
			</div>
			<div className={`stats shadow ${styles.hidden}`}>
				<div className='stat bg-success text-success-content'>
					<span className='badge badge-outline glass hover:scale-110 hover:badge-neutral'>
						<p className='hover:text-neutral-content'>Step 5:</p>
					</span>
					<div className='stat-value'>Checkout</div>
					<div className='text-success-content'>
						Checkout and BabyHop
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProcessMap;
