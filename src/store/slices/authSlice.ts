import { createSlice } from '@reduxjs/toolkit';
import { UserData } from '@/common/types';

interface IInitialState {
	userData: UserData;
	signedIn: boolean;
}

const initialState: IInitialState = {
	userData: {
		firstName: '',
		lastName: '',
		username: '',
		email: '',
		avatarUrl: '',
		createdAt: '',
	},
	signedIn: false,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		signInSuccess(state, action) {
			state.signedIn = true;
			state.userData = action.payload;
		},
		signOutSuccess(state) {
			state.signedIn = false;
			state.userData = initialState.userData;
		},
		setUserData(state, action) {
			state.userData = action.payload;
		},
	},
});

export const { signInSuccess, signOutSuccess, setUserData } = authSlice.actions;
export default authSlice.reducer;
