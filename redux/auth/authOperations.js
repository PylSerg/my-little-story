import { auth } from "../../firebase.config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";

import { authSlice } from "./authReducer";

const { uploadUserProfile, authStateChange, authSignOut } = authSlice.actions;

export const authSignInUser =
	({ email, password }) =>
	async (dispatch, getState) => {
		try {
			const user = await signInWithEmailAndPassword(auth, email, password);
		} catch (error) {
			console.log(error);
			console.log(error.message);
		}
	};

export const authSignUpUser =
	({ login, email, password }) =>
	async (dispatch, getState) => {
		try {
			await createUserWithEmailAndPassword(auth, email, password);

			const user = auth.currentUser;

			await updateProfile(auth.currentUser, {
				displayName: login,
			});

			await dispatch(uploadUserProfile({ userId: user.uid, nickname: user.displayName }));
		} catch (error) {
			console.log("Error in 'authSignUpUser': ", error);
			console.log(error.message);
		}
	};

export const authSignOutUser = () => async (dispatch, getState) => {
	await signOut(auth);
	await dispatch(authSignOut());
};

export const authStateChangeUser = () => async (dispatch, getState) => {
	onAuthStateChanged(auth, user => {
		if (user) {
			dispatch(uploadUserProfile({ userId: user.uid, nickname: user.displayName }));
			dispatch(authStateChange({ stateChange: true }));
		}
	});
};
