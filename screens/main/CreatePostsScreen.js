import React, { useState, useEffect } from "react";
import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";

import { Camera } from "expo-camera";

import Snap from "../../assets/icons/snap.svg";

import CommonStyles from "../../styles/CommonStyles";

export default function CreatePostsScreen({ navigation: { navigate } }) {
	const [reboot, setReboot] = useState(false);

	const [camera, setCamera] = useState(null);
	const [photo, setPhoto] = useState(null);

	useEffect(() => {
		setReboot(false);
	}, [reboot]);

	const takePhoto = async () => {
		const photo = await camera.takePictureAsync();

		setPhoto(photo.uri);
	};

	const publishPhoto = () => {
		navigate("PostsScreen", { photo });
		setPhoto(null);
		setReboot(true);
	};

	return (
		<>
			{!reboot && (
				<View style={styles.container}>
					<Camera style={styles.camera} type="front" ref={setCamera}>
						{photo && (
							<View style={styles.photoContainer}>
								<Image style={styles.photo} source={{ uri: photo }} />
							</View>
						)}

						<TouchableOpacity onPress={takePhoto}>
							<Snap style={styles.snap} />
						</TouchableOpacity>
					</Camera>

					<TouchableOpacity style={[CommonStyles.button, styles.button]} onPress={publishPhoto}>
						<Text style={CommonStyles.buttonTitle}>Publish</Text>
					</TouchableOpacity>
				</View>
			)}
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingLeft: 16,
		paddingRight: 16,
	},

	camera: {
		height: 240,

		justifyContent: "center",
		alignItems: "center",

		marginTop: 32,

		borderWidth: 1,
		borderStyle: "solid",
		borderColor: "#e8e8e8",
		borderRadius: 8,
	},

	snap: {
		width: 60,
		height: 60,
	},
	snap: {
		color: "#fff",
	},

	photoContainer: {
		position: "absolute",
		left: 0,
		top: 0,

		width: "100%",
	},

	photo: {
		height: 240,
	},

	button: {
		marginTop: 50,
	},
});
