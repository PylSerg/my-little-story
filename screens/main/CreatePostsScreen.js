import React, { useState, useEffect } from "react";
import { Text, TextInput, ScrollView, View, Image, TouchableOpacity, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, StyleSheet } from "react-native";

import { storage } from "../../firebase.config";
import { ref, uploadBytes } from "firebase/storage";

import { Camera } from "expo-camera";
import * as Location from "expo-location";

import Snap from "../../assets/icons/snap.svg";
import MapPin from "../../assets/icons/map-pin.svg";
import Trash from "../../assets/icons/trash.svg";

import CommonStyles from "../../styles/CommonStyles";

export default function CreatePostsScreen({ navigation: { navigate } }) {
	const [reboot, setReboot] = useState(false);

	const [readyToPublish, setReadyToPublish] = useState(false);

	const [camera, setCamera] = useState(null);
	const [photo, setPhoto] = useState(null);

	const [photoName, setPhotoName] = useState("");
	const [photoPlace, setPhotoPlace] = useState("");

	const [coords, setCoords] = useState({ lat: 0, lon: 0 });

	useEffect(() => {
		setReboot(false);
	}, [reboot]);

	useEffect(() => {
		(async () => {
			let { status } = await Location.requestForegroundPermissionsAsync();
		})();
	}, []);

	useEffect(() => {
		if (photo && photoName && photoPlace) setReadyToPublish(true);
	});

	const takeOrClear = () => {
		if (!photo) {
			takePhoto();
		} else {
			clearPhoto();
		}
	};

	const takePhoto = async () => {
		const photo = await camera.takePictureAsync();
		const location = await Location.getCurrentPositionAsync();

		setPhoto(photo.uri);
		setCoords({ lat: location.coords.latitude, lon: location.coords.longitude });
	};

	const clearPhoto = () => {
		setPhoto(null);
		setReboot(true);
	};

	const handelChangePhotoName = value => setPhotoName(value);
	const handelChangePhotoPlace = value => setPhotoPlace(value);

	const publishPhoto = () => {
		navigate("DefaultScreenPosts", { photo, photoName, photoPlace, coords });
		uploadPhotoToServer();
		handleClearData();
	};

	const uploadPhotoToServer = async () => {
		const response = await fetch(photo);
		const file = await response.blob();

		const photoId = Date.now().toString();
		const storageRef = ref(storage, `images/${photoId}`);

		await uploadBytes(storageRef, file);
	};

	const handleClearData = () => {
		setPhoto(null);
		setPhotoName("");
		setPhotoPlace("");
		setCoords({ lat: 0, lon: 0 });

		setReadyToPublish(false);
		setReboot(true);
	};

	return (
		<>
			{!reboot && (
				<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
					<>
						<ScrollView style={styles.container}>
							<Camera style={styles.camera} type="front" ref={setCamera}>
								{photo && (
									<View style={styles.photoContainer}>
										<Image style={styles.photo} source={{ uri: photo }} />
									</View>
								)}

								<TouchableOpacity onPress={takeOrClear}>
									<Snap style={styles.snap} />
								</TouchableOpacity>
							</Camera>

							<View style={styles.descriptionContainer}>
								<KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
									<TextInput style={styles.descriptionInput} value={photoName} placeholder="Name..." onChangeText={value => handelChangePhotoName(value)} />
								</KeyboardAvoidingView>

								<View>
									<MapPin style={styles.mapPin} />
									<KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
										<TextInput style={[styles.descriptionInput, { paddingLeft: 28 }]} placeholder={`Place...`} onChangeText={value => handelChangePhotoPlace(value)} />
									</KeyboardAvoidingView>
								</View>
							</View>

							<TouchableOpacity
								style={readyToPublish ? styles.publishButton() : [styles.publishButton(), { backgroundColor: "#f6f6f6" }]}
								disabled={!readyToPublish}
								onPress={publishPhoto}
							>
								<Text style={readyToPublish ? CommonStyles.buttonTitle : [CommonStyles.buttonTitle, { color: "#bdbdbd" }]}>Publish</Text>
							</TouchableOpacity>
						</ScrollView>

						<View style={styles.trashButtonContainer}>
							<TouchableOpacity style={styles.trashButton} onPress={handleClearData}>
								<Trash style={styles.trashIcon} />
							</TouchableOpacity>
						</View>
					</>
				</TouchableWithoutFeedback>
			)}
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,

		paddingHorizontal: 16,

		backgroundColor: "#fff",
	},

	camera: {
		height: 240,

		justifyContent: "center",
		alignItems: "center",

		marginTop: 32,
	},

	snap: {
		width: 60,
		height: 60,
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

	descriptionContainer: {
		marginTop: 50,
	},

	descriptionInput: {
		marginBottom: 16,
		paddingVertical: 16,

		borderBottomWidth: 1,
		borderBottomStyle: "solid",
		borderBottomColor: "#e8e8e8",
	},

	mapPin: {
		position: "absolute",
		left: 0,
		top: "25%",

		width: 24,
		height: 24,
	},

	trashButtonContainer: {
		alignItems: "center",

		backgroundColor: "#fff",
	},

	trashButton: {
		width: 70,
		height: 40,

		marginTop: 10,
		marginBottom: 20,

		paddingHorizontal: 23,
		paddingVertical: 8,

		backgroundColor: "#f6f6f6",
		borderRadius: 20,
	},

	trashIcon: {
		width: 24,
		height: 24,
	},

	publishButton() {
		return {
			...CommonStyles.button,
			marginTop: 16,
		};
	},
});
