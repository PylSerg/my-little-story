import React, { useState } from "react";

import { LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Provider } from "react-redux";
import { store } from "./redux/store";

import RegistrationScreen from "./screens/auth/RegistrationScreen";
import LoginScreen from "./screens/auth/LoginScreen";
import Home from "./screens/main/Home";

LogBox.ignoreLogs(["Non-serializable values were found in the navigation state"]);

const MainStack = createStackNavigator();

export default function App() {
	const [isRegistered, setIsRegistered] = useState(false);

	return (
		<Provider store={store}>
			<NavigationContainer>
				<MainStack.Navigator>
					{!isRegistered && (
						<>
							<MainStack.Screen
								name="Login"
								component={LoginScreen}
								options={{
									headerShown: false,
								}}
								initialParams={{ setIsRegistered }}
							/>

							<MainStack.Screen
								name="Registration"
								component={RegistrationScreen}
								options={{
									headerShown: false,
								}}
								initialParams={{ setIsRegistered }}
							/>
						</>
					)}

					{isRegistered && (
						<>
							<MainStack.Screen
								name="Home"
								component={Home}
								options={{
									headerShown: false,
								}}
								initialParams={{ setIsRegistered }}
							/>
						</>
					)}
				</MainStack.Navigator>
			</NavigationContainer>
		</Provider>
	);
}
