import React, { useEffect } from 'react';

import styles from './InfoHero.module.css';
import { staggerAnimation } from '@/utils/animation.utils';
import BaseCard from '../../ui/BaseCard';

const InfoHero = () => {
	useEffect(() => {
		const elementsToAnimate = document.querySelectorAll(
			'.' + styles.hidden
		);

		return () => {
			staggerAnimation(styles.show, elementsToAnimate);
		};
	}, []);

	return (
		<div className='hero py-14 bg-base-200'>
			<div className='hero-content flex-col xl:grid xl:grid-cols-3'>
				<BaseCard
					title='Travel Stress-Free'
					cardStyles={`shadow-xl ${styles.hidden} bg-primary text-primary-content h-full`}
					image='https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg'
				>
					<div className='py-4'>
						<p>If a dog chews shoes whose shoes does he choose?</p>
					</div>
				</BaseCard>

				<BaseCard
					title='Rent Gear'
					cardStyles={`shadow-xl ${styles.hidden} h-full`}
					image='https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg'
					imageBottom
				>
					<div className='py-4'>
						<p>If a dog chews shoes whose shoes does he choose?</p>
					</div>
				</BaseCard>
				<BaseCard
					title='Clean and Trusty'
					cardStyles={`shadow-xl ${styles.hidden} bg-secondary text-secondary-content h-full`}
					image='https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg'
				>
					<div className='py-4'>
						<p>If a dog chews shoes whose shoes does he choose?</p>
					</div>
				</BaseCard>
			</div>
		</div>
	);
};

export default InfoHero;
