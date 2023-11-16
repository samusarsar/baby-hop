import { createSlice } from '@reduxjs/toolkit';
import { UserData } from '@/common/types';

interface IInitialState {
	userData: UserData;
	signedIn: boolean;
}

const initialState: IInitialState = {
	userData: {
		id: '',
		firstName: '',
		lastName: '',
		username: '',
		email: '',
		avatarUrl: '',
		createdAt: '',
		updatedAt: '',
	},
	signedIn: false,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		signInSuccess(state, action) {
			state.signedIn = true;
			state.userData = {
				...state.userData,
				...action.payload,
			};
		},
		signOutSuccess(state) {
			state.signedIn = false;
			state.userData = initialState.userData;
		},
		updateUserData(state, action) {
			state.userData = {
				...state.userData,
				...action.payload,
			};
		},
	},
});

export const { signInSuccess, signOutSuccess, updateUserData } =
	authSlice.actions;
export default authSlice.reducer;
