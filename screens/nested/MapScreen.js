import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import MapView, { Marker } from "react-native-maps";

export default function MapScreen({
	route: {
		params: {
			coords: { lat, lon },
			placeLabel,
		},
	},
}) {
	const [region, setRegion] = useState({
		latitude: lat,
		longitude: lon,
		latitudeDelta: 0.01,
		longitudeDelta: 0.01,
	});

	return (
		<View style={styles.container}>
			<MapView style={styles.map} initialRegion={region}>
				<Marker coordinate={{ latitude: region.latitude, longitude: region.longitude }} title={placeLabel} />
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
