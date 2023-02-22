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
		justifyContent: "center",
		alignItems: "center",
		width: "100%",

		padding: 16,

		backgroundColor: "#ff6c00",
		borderRadius: 100,
	},

	buttonTitle: {
		color: "#fff",
		fontSize: 16,
		lineHeight: 19,
		textAlign: "center",
	},
});

export default CommonStyles;
