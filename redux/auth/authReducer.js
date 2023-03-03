import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	userId: null,
	nickname: null,
	stateChange: false,
};

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		uploadUserProfile: (state, { payload }) => ({
			...state,
			userId: payload.userId,
			nickname: payload.nickname,
		}),

		authStateChange: (state, { payload }) => ({
			...state,
			stateChange: payload.stateChange,
		}),

		authSignOut: () => initialState,
	},
});
