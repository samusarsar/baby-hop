'use client';

import CTABanner from '@/components/landing-page/CTABanner/CTABanner';
import InfoCards from '@/components/landing-page/InfoHero/InfoCards';
import ProcessMap from '@/components/landing-page/ProcessMap/ProcessMap';
import TopHero from '@/components/landing-page/TopHero/TopHero';

const Home = () => {
	return (
		<div className='h-full'>
			<TopHero />
			<InfoCards />
			<ProcessMap />
			<CTABanner />
		</div>
	);
};

export default Home;
