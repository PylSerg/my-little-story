import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";

const Tab = createBottomTabNavigator();

export default function Home({ route }) {
	return (
		<Tab.Navigator initialRouteName="PostsScreen">
			<Tab.Screen
				name="PostsScreen"
				component={PostsScreen}
				options={{
					title: "Posts",
					headerTitleStyle: {
						fontSize: 17,
						lineHeight: 22,
					},
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
				}}
			/>
		</Tab.Navigator>
	);
}
