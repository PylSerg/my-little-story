import React from "react";

import { Button } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";

const Tab = createBottomTabNavigator();

export default function Home({
	route: {
		params: { setIsRegistered },
	},
}) {
	const logOut = () => {
		return <Button title="Log out" onPress={() => setIsRegistered(false)} />;
	};

	return (
		<Tab.Navigator initialRouteName="PostsScreen" tabBarOption={{ showLabel: false }}>
			<Tab.Screen
				name="PostsScreen"
				component={PostsScreen}
				options={{
					title: "Posts",
					headerTitleStyle: {
						fontSize: 17,
						lineHeight: 22,
					},
					headerRight: logOut,
				}}
			/>
			<Tab.Screen
				name="CreatePostsScreen"
				component={CreatePostsScreen}
				options={{
					title: "Create post",
					headerTitleStyle: {
						fontSize: 17,
						lineHeight: 22,
					},
				}}
			/>
			<Tab.Screen
				name="ProfileScreen"
				component={ProfileScreen}
				options={{
					title: "Profile",
					headerTitleStyle: {
						fontSize: 17,
						lineHeight: 22,
					},
					headerRight: logOut,
				}}
			/>
		</Tab.Navigator>
	);
}
