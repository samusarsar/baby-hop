import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import themeReducer from './slices/themeSlice';
import storage from './storage.config';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig = {
	key: 'auth',
	storage,
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);
const persistedThemeReducer = persistReducer(persistConfig, themeReducer);

export const store = configureStore({
	reducer: {
		auth: persistedAuthReducer,
		theme: persistedThemeReducer,
	},
	devTools: process.env.NODE_ENV !== 'production',
	middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
