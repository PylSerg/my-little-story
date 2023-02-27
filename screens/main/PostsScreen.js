import React from "react";

import { StyleSheet, TouchableOpacity, moduleName } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import DefaultScreenPosts from "../nested/DefaultScreenPosts";
import CommentsScreen from "../nested/CommentsScreen";
import MapScreen from "../nested/MapScreen";

import LogOutIcon from "../../assets/icons/log-out.svg";

const NestedStack = createStackNavigator();

export default function PostsScreen({
	route: {
		params: { setIsRegistered },
	},
}) {
	const logOut = () => {
		return (
			<TouchableOpacity style={styles.logOutIcon} onPress={() => setIsRegistered(false)}>
				<LogOutIcon />
			</TouchableOpacity>
		);
	};

	return (
		<NestedStack.Navigator>
			{/* 
				Posts 
			*/}
			<NestedStack.Screen
				name="DefaultScreenPosts"
				component={DefaultScreenPosts}
				options={{
					title: "Posts",

					headerTitleStyle: {
						fontSize: 17,
						lineHeight: 22,
					},

					headerRight: logOut,
				}}
			/>

			{/* 
				Comments
			*/}
			<NestedStack.Screen
				name="CommentsScreen"
				component={CommentsScreen}
				options={{
					title: "Comments",

					headerTitleStyle: {
						fontSize: 17,
						lineHeight: 22,
					},
				}}
			/>

			{/* 
				Map
			*/}
			<NestedStack.Screen
				name="MapScreen"
				component={MapScreen}
				options={{
					title: "Map",

					headerTitleStyle: {
						fontSize: 17,
						lineHeight: 22,
					},
				}}
			/>
		</NestedStack.Navigator>
	);
}

const styles = StyleSheet.create({
	logOutIcon: {
		width: 24,
		height: 24,
		marginRight: 16,
	},
});
