import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";

const MainStack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<MainStack.Navigator initialRouteName="Login">
				{/* 
            Login screen 
        */}
				<MainStack.Screen
					name="Login"
					component={LoginScreen}
					options={{
						headerShown: false,
					}}
				/>

				{/* 
            Registration screen 
        */}
				<MainStack.Screen
					name="Registration"
					component={RegistrationScreen}
					options={{
						headerShown: false,
					}}
				/>
			</MainStack.Navigator>
		</NavigationContainer>
	);
}
