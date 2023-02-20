import { StyleSheet } from "react-native";

const CommonStyles = StyleSheet.create({
	input: {
		width: "100%",
		padding: 16,

		color: "#212121",
		fontSize: 16,
		lineHeight: 19,

		backgroundColor: "#f6f6f6",

		borderWidth: 1,
		borderStyle: "solid",
		borderColor: "#e8e8e8",
		borderRadius: 8,
	},

	inputActive: {
		backgroundColor: "#fff",
		borderColor: "#ff6c00",
	},

	button: {
		width: "100%",

		padding: 16,

		color: "#fff",
		fontSize: 16,
		lineHeight: 19,
		textAlign: "center",

		backgroundColor: "#ff6c00",
		borderRadius: 100,
	},
});

export default CommonStyles;
