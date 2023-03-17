import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from "react-native";

import { firestore } from "../../firebase.config";
import { collection, onSnapshot } from "firebase/firestore";

import CommentsIcon from "../../assets/icons/comments.svg";
import MapPinIcon from "../../assets/icons/map-pin.svg";

export default function DefaultScreenPosts({ navigation: { navigate } }) {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		getAllPosts();
	}, []);

	const getAllPosts = async () => {
		await onSnapshot(collection(firestore, "posts"), data => {
			setPosts(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
		});
	};

	return (
		<View style={styles.container}>
			<FlatList
				data={posts}
				keyExtractor={(_, indx) => indx.toString()}
				renderItem={({ item }) => (
					<View style={styles.postsContainer}>
						<Text style={styles.nickname}>{item.nickname}</Text>

						<Image style={styles.photo} source={{ uri: item.photo }} />

						<Text style={styles.label}>{item.photoName}</Text>

						<View style={styles.detailsContainer}>
							<TouchableOpacity style={styles.commentsContainer} onPress={() => navigate("CommentsScreen")}>
								<CommentsIcon style={styles.commentsIcon} />

								<Text style={styles.commentsCount}>0</Text>
							</TouchableOpacity>

							<TouchableOpacity onPress={() => navigate("MapScreen", { coords: item.coords, placeLabel: item.photoPlace })}>
								<MapPinIcon style={styles.mapPinIcon} />

								<Text style={styles.place}>{item.photoPlace}</Text>
							</TouchableOpacity>
						</View>
					</View>
				)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",

		backgroundColor: "#fff",
	},

	postsContainer: {
		paddingHorizontal: 16,
		paddingBottom: 32,
	},

	nickname: {
		color: "#212121",
		fontSize: 13,
		lineHeight: 15,
		fontWeight: "700",

		marginBottom: 10,
	},

	photo: {
		width: "100%",
		height: 240,

		borderRadius: 8,
	},

	label: {
		color: "#212121",
		fontSize: 16,
		fontWeight: "500",
		lineHeight: 19,

		marginTop: 8,
	},

	detailsContainer: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",

		marginTop: 8,
	},

	commentsContainer: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
	},

	commentsIcon: {
		width: 24,
		height: 24,
	},

	commentsCount: {
		color: "#bdbdbd",
		fontSize: 16,
		lineHeight: 19,

		marginLeft: 6,
	},

	mapPinIcon: {
		position: "absolute",
		left: -28,
		top: "-10%",

		width: 24,
		height: 24,
	},

	place: {
		color: "#212121",
		fontSize: 16,
		fontWeight: "400",
		lineHeight: 19,
		textDecorationLine: "underline",
		textAlign: "right",
	},
});
