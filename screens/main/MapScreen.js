import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import MapView, { Marker } from "react-native-maps";

export default function MapScreen() {
	const [region, setRegion] = useState({
		latitude: 50.521624,
		longitude: 30.462156,
		latitudeDelta: 0.005,
		longitudeDelta: 0.005,
	});
	return (
		<View style={styles.container}>
			<MapView style={styles.map} initialRegion={region}>
				<Marker coordinate={{ latitude: region.latitude, longitude: region.longitude }} title="Park" />
			</MapView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},

	map: {
		flex: 1,
	},
});
