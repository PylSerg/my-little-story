import React, { useState, useEffect } from "react";
import { View, Image, Button, StyleSheet, FlatList } from "react-native";

export default function PostsScreen({ navigation: { navigate }, route: { params } }) {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		if (params) setPosts(prevState => [...prevState, params]);
	}, [params]);

	return (
		<View style={styles.container}>
			<FlatList
				data={posts}
				keyExtractor={(_, indx) => indx.toString()}
				renderItem={({ item }) => (
					<View style={styles.postsContainer}>
						<Image style={styles.image} source={{ uri: item.photo }} />
						<Button title="Map" onPress={() => navigate("MapScreen")} />
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
	},

	postsContainer: {
		paddingHorizontal: 16,
		paddingBottom: 32,
	},

	image: {
		width: "100%",
		height: 240,
	},
});
