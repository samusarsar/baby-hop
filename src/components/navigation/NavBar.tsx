import Image from 'next/image';
import NavLink from '../ui/NavLink';
import Link from 'next/link';

const NavBar = async () => {
	return (
		<nav className='grid grid-cols-10 py-2 px-4 justify-between align-middle min-w-full min-h-[60px] bg-gray-light dark:bg-black dark:text-white border-b-2 border-white'>
			<div className='col-span-2 flex justify-center'>
				<Link href='/'>
					<Image
						alt='BabyHop Logo'
						src='/logo.png'
						width={80}
						height={80}
						priority={true}
					/>
				</Link>
			</div>
			<ul className='col-span-6 flex justify-evenly items-center'>
				<NavLink to='/'>Home</NavLink>
				<NavLink to='/find'>Find</NavLink>
				<NavLink to='/become'>Become</NavLink>
				<NavLink to='/about'>About</NavLink>
			</ul>
			<div className='col-span-2 flex justify-center items-center'>
				<NavLink
					to='/sign-in'
					styles='p-2 rounded bg-yellow text-black hover:bg-orange hover:text-white hover:scale-105 transition-all'
				>
					Sign In
				</NavLink>
			</div>
		</nav>
	);
};

export default NavBar;
