function BaseCard({
	title,
	size,
	children,
}: {
	title: string;
	size?: string;
	children?: React.ReactNode;
}) {
	return (
		<div className='rounded bg-gray-dark border-2 border-white w-[500px] flex flex-col justify-center items-center p-10'>
			<h3 className='text-xl pb-3'>{title}</h3>
			<div className='flex flex-col justify-center items-center'>
				{children}
			</div>
		</div>
	);
}

export default BaseCard;
