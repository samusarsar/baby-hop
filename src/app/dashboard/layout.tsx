import DashboardNav from '@/components/navigation/DashboardNav';
import MiniDashboardNav from '@/components/navigation/MiniDashboardNav';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<section className='flex h-full'>
			<DashboardNav />
			<div className='flex flex-col'>
				{children}
				<MiniDashboardNav />
			</div>
		</section>
	);
};

export default DashboardLayout;
