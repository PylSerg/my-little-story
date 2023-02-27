import { auth } from "../../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const authSignInUser = () => async (dispatch, getState) => {
	try {
		const user = null;
	} catch (error) {
		console.log(error);
		console.log(error.message);
	}
};

export const authSignUpUser =
	({ login, email, password }) =>
	async (dispatch, getState) => {
		try {
			const user = await createUserWithEmailAndPassword(auth, email, password);

			// console.log(`user:`, user);
		} catch (error) {
			console.log(error);
			console.log(error.message);
		}
	};

export const authSignOutUser = () => async (dispatch, getState) => {
	try {
		const user = null;
	} catch (error) {
		console.log(error);
		console.log(error.message);
	}
};
