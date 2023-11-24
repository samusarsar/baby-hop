'use client';

import CTABanner from '@/components/landing-page/CTABanner/CTABanner';
import InfoHero from '@/components/landing-page/InfoHero/InfoHero';
import ProcessMap from '@/components/landing-page/ProcessMap/ProcessMap';
import TopHero from '@/components/landing-page/TopHero/TopHero';
import { useEffect, useRef } from 'react';

const Home = () => {
	return (
		<div>
			<TopHero />
			<InfoHero />
			<ProcessMap />
			<CTABanner />
		</div>
	);
};

export default Home;
