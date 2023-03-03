import React, { useEffect } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { useSelector, useDispatch } from "react-redux";
import { authStateChangeUser } from "../redux/auth/authOperations";

import RegistrationScreen from "../screens/auth/RegistrationScreen";
import LoginScreen from "../screens/auth/LoginScreen";
import Home from "../screens/main/Home";

const MainStack = createStackNavigator();

export default function Main() {
	const { stateChange } = useSelector(state => state.auth);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(authStateChangeUser());
	}, []);

	return (
		<NavigationContainer>
			<MainStack.Navigator>
				{!stateChange && (
					<>
						<MainStack.Screen
							name="Login"
							component={LoginScreen}
							options={{
								headerShown: false,
							}}
						/>

						<MainStack.Screen
							name="Registration"
							component={RegistrationScreen}
							options={{
								headerShown: false,
							}}
						/>
					</>
				)}

				{stateChange && (
					<>
						<MainStack.Screen
							name="Home"
							component={Home}
							options={{
								headerShown: false,
							}}
						/>
					</>
				)}
			</MainStack.Navigator>
		</NavigationContainer>
	);
}
