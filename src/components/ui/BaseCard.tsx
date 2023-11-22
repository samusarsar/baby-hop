import React from 'react';

const BaseCard = ({
	title,
	image,
	imageBottom,
	imagePadded,
	cardStyles,
	children,
}: {
	title: string;
	image?: string;
	imageBottom?: boolean;
	imagePadded?: boolean;
	cardStyles?: string;
	children: React.ReactNode;
}) => {
	return (
		<div
			className={
				'card md:w-96 bg-neutral text-neutral-content' +
				(!!cardStyles ? ` ${cardStyles}` : '')
			}
		>
			{image && !imageBottom && (
				<figure className={imagePadded ? 'px-10 pt-10' : ''}>
					<img
						src={image}
						alt='Shoes'
						className={imagePadded ? 'rounded-xl' : ''}
					/>
				</figure>
			)}
			<div className='card-body items-center text-center'>
				<h2 className='card-title text-2xl'>{title}</h2>
				{children}
			</div>
			{image && imageBottom && (
				<figure className={imagePadded ? 'px-10 pb-10' : ''}>
					<img
						src={image}
						alt='Shoes'
						className={imagePadded ? 'rounded-xl' : ''}
					/>
				</figure>
			)}
		</div>
	);
};

export default BaseCard;
