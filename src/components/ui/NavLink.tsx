import Link from 'next/link';
import React from 'react';

const NavLink = ({
	children,
	to,
	styles,
}: {
	children: React.ReactNode;
	to: string;
	styles?: string;
}) => {
	return (
		<Link
			href={to}
			className={styles || 'p-2 rounded hover:bg-blue'}
		>
			{children}
		</Link>
	);
};

export default NavLink;
