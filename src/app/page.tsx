'use client';

import CTABanner from '@/components/landing-page/CTABanner/CTABanner';
import InfoCards from '@/components/landing-page/InfoHero/InfoCards';
import ProcessMap from '@/components/landing-page/ProcessMap/ProcessMap';
import TopHero from '@/components/landing-page/TopHero/TopHero';
import { useEffect, useRef } from 'react';

const Home = () => {
	return (
		<div>
			<TopHero />
			<InfoCards />
			<ProcessMap />
			<CTABanner />
		</div>
	);
};

export default Home;
