import React from "react";

import { LogBox } from "react-native";

import { Provider } from "react-redux";
import { store } from "./redux/store";

import Main from "./components/Main";

LogBox.ignoreLogs(["Non-serializable values were found in the navigation state", "AsyncStorage has been extracted from react-native core and will be removed in a future release."]);

export default function App() {
	return (
		<Provider store={store}>
			<Main />
		</Provider>
	);
}
