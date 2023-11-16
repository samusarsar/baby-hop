'use client';

import { Provider } from 'react-redux';
import { persistor, store } from '../../store/store';
import { SessionProvider } from 'next-auth/react';
import { PersistGate } from 'redux-persist/integration/react';

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<Provider store={store}>
			<PersistGate
				loading={null}
				persistor={persistor}
			>
				<SessionProvider>{children}</SessionProvider>
			</PersistGate>
		</Provider>
	);
};

export default Providers;
