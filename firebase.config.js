import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyAjhH59A3wVWvNOMa3n9WWmtwRAlqmEVAs",
	authDomain: "my-little-story-rn.firebaseapp.com",
	projectId: "my-little-story-rn",
	storageBucket: "my-little-story-rn.appspot.com",
	messagingSenderId: "825181509156",
	appId: "1:825181509156:web:578ce2cf7825173196aab1",
	measurementId: "G-DLRVS0EWE3",
	storageBucket: "gs://my-little-story-rn.appspot.com",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
