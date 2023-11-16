import React from 'react';

const BaseCard = ({
	title,
	cardStyles,
	children,
}: {
	title: string;
	cardStyles?: string;
	children: React.ReactNode;
}) => {
	return (
		<div
			className={
				'card md:w-96  bg-neutral text-neutral-content' +
				(!!cardStyles ? ` ${cardStyles}` : '')
			}
		>
			<div className='card-body items-center text-center'>
				<h2 className='card-title text-2xl'>{title}</h2>
				{children}
			</div>
		</div>
	);
};

export default BaseCard;
