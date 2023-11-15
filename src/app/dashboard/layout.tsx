const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<section className='flex'>
			<div className='DashNav'>DashNav</div>
			<div>{children}</div>
		</section>
	);
};

export default DashboardLayout;
