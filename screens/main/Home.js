import React from "react";

import { StyleSheet, TouchableOpacity } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";

import LogOutIcon from "../../assets/icons/log-out.svg";
import PostsIcon from "../../assets/menu-icons/posts.svg";
import CreateIcon from "../../assets/menu-icons/create.svg";
import ProfileIcon from "../../assets/menu-icons/profile.svg";

const Tab = createBottomTabNavigator();

export default function Home({
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
		<Tab.Navigator
			initialRouteName="PostsScreen"
			screenOptions={{
				tabBarStyle: {
					display: "flex",
					height: 60,
					paddingTop: 10,
					paddingBottom: 10,
				},
			}}
		>
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
					tabBarIcon: () => <PostsIcon style={styles.tabIcon} />,
					tabBarShowLabel: false,
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

					tabBarIcon: () => <CreateIcon style={styles.activeTabIcon()} />,
					tabBarShowLabel: false,
					tabBarItemStyle: {
						backgroundColor: "#ff6c00",
						borderRadius: 20,
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
					tabBarIcon: () => <ProfileIcon style={styles.tabIcon} />,
					tabBarShowLabel: false,
				}}
			/>
		</Tab.Navigator>
	);
}

const styles = StyleSheet.create({
	logOutIcon: {
		width: 24,
		height: 24,
		marginRight: 16,
	},

	tabIcon: {
		width: 24,
		height: 24,
	},

	tabIconCentral: {
		fill: "#fff",
	},

	activeTabIcon() {
		return {
			...this.tabIcon,
			...this.tabIconCentral,
		};
	},
});
