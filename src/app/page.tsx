'use client';

import InfoHero from '@/components/landing-page/InfoHero/InfoHero';
import TopHero from '@/components/landing-page/TopHero/TopHero';
import { useEffect, useRef } from 'react';

const Home = () => {
	return (
		<div>
			<TopHero />
			<InfoHero />
		</div>
	);
};

export default Home;
