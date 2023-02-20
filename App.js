import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import RegistrationScreen from "./screens/auth/RegistrationScreen";
import LoginScreen from "./screens/auth/LoginScreen";
import Home from "./screens/main/Home";

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

				{/* 
            Home screen 
        */}
				<MainStack.Screen
					name="Home"
					component={Home}
					options={{
						headerShown: false,
					}}
				/>
			</MainStack.Navigator>
		</NavigationContainer>
	);
}
