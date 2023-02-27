import React from "react";

import { StyleSheet, TouchableOpacity } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";

import GoBackIcon from "../../assets/icons/back.svg";
import LogOutIcon from "../../assets/icons/log-out.svg";
import PostsIcon from "../../assets/menu-icons/posts.svg";
import CreateIcon from "../../assets/menu-icons/create.svg";
import ProfileIcon from "../../assets/menu-icons/profile.svg";

import { CommonActions } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

export default function Home({
	route: {
		params: { setIsRegistered },
	},
}) {
	const goBack = () => {
		CommonActions.goBack();

		return (
			<TouchableOpacity style={styles.goBackIcon} onPress={() => setIsRegistered(false)}>
				<GoBackIcon />
			</TouchableOpacity>
		);
	};

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
			{/* 
				Posts 
			*/}
			<Tab.Screen
				name="PostsScreen"
				component={PostsScreen}
				options={{
					headerShown: false,

					tabBarIcon: () => <PostsIcon style={styles.tabIcon} />,
					tabBarShowLabel: false,
				}}
				initialParams={{ setIsRegistered }}
			/>

			{/* 
				Create post 
			*/}
			<Tab.Screen
				name="CreatePostsScreen"
				component={CreatePostsScreen}
				options={{
					title: "Create post",
					headerTitleStyle: {
						fontSize: 17,
						lineHeight: 22,
					},

					headerLeft: goBack,

					tabBarIcon: () => <CreateIcon style={styles.activeTabIcon()} />,
					tabBarShowLabel: false,
					tabBarItemStyle: {
						backgroundColor: "#ff6c00",
						borderRadius: 20,
					},

					tabBarStyle: {
						display: "none",
					},
				}}
			/>

			{/* 
				Profile
			*/}
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

	goBackIcon: {
		width: 24,
		height: 24,
		marginLeft: 20,
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
