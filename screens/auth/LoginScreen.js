import React, { useState } from "react";
import { StyleSheet, TouchableWithoutFeedback, Keyboard, View, Text, TextInput, ImageBackground } from "react-native";
import CommonStyles from "../../styles/CommonStyles";

export default function LoginScreen({ navigation }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [hidePassword, setHidePassword] = useState(true);

	const defaultInputStyle = [CommonStyles.input, styles.input];
	const activeInputStyle = [...defaultInputStyle, CommonStyles.inputActive];

	const [emailStyle, setEmailStyle] = useState(defaultInputStyle);
	const [passwordStyle, setPasswordStyle] = useState(defaultInputStyle);

	// Toggle password visibility
	const togglePasswordVisibility = () => setHidePassword(!hidePassword);

	// Changes input value
	const handleChangeEmail = value => setEmail(value);
	const handleChangePassword = value => setPassword(value);

	// Changes input style to active
	const changeEmailStyle = () => setEmailStyle(activeInputStyle);
	const changePasswordStyle = () => setPasswordStyle(activeInputStyle);

	// Reset input style
	const resetEmailStyle = () => setEmailStyle(defaultInputStyle);
	const resetPasswordStyle = () => setPasswordStyle(defaultInputStyle);

	// Submit form
	const submitForm = () => {
		console.log({ email: email, password: password });

		setEmail("");
		setPassword("");

		navigation.navigate("Home");
	};

	// Go to RegistrationScreen
	const goToRegistrationScreen = () => navigation.navigate("Registration");

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<View style={styles.container}>
				<ImageBackground style={styles.background} source={require("../../assets/images/background.jpg")}>
					<View style={styles.signInBlock}>
						<Text style={styles.header}>Sign in</Text>

						<View style={styles.inputBlock}>
							<TextInput
								style={emailStyle}
								keyboardType="email-address"
								value={email}
								placeholder="Email"
								onChangeText={value => handleChangeEmail(value)}
								onFocus={changeEmailStyle}
								onBlur={resetEmailStyle}
							/>

							<View style={{ width: "100%" }}>
								<TextInput
									style={passwordStyle}
									secureTextEntry={hidePassword}
									value={password}
									placeholder="Password"
									onChangeText={value => handleChangePassword(value)}
									onFocus={changePasswordStyle}
									onBlur={resetPasswordStyle}
								/>

								<Text style={styles.showPassword} onPress={togglePasswordVisibility}>
									{hidePassword ? "Show" : "Hidden"}
								</Text>
							</View>
						</View>

						<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
							<Text style={[CommonStyles.button, styles.signInButton]} onPress={submitForm}>
								Sign in
							</Text>
						</TouchableWithoutFeedback>

						<Text style={styles.registration} onPress={goToRegistrationScreen}>
							Don't have an account? Register
						</Text>
					</View>
				</ImageBackground>
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},

	background: {
		flex: 1,
		resizeMode: "cover",
		justifyContent: "flex-end",
	},

	signInBlock: {
		alignItems: "center",
		paddingLeft: 16,
		paddingRight: 16,
		paddingTop: 32,
		backgroundColor: "#fff",
		borderTopLeftRadius: 25,
		borderTopRightRadius: 25,
	},

	header: {
		fontSize: 30,
		marginBottom: 32,
	},

	inputBlock: {
		width: "100%",
	},

	input: {
		marginBottom: 16,
	},

	showPassword: {
		position: "absolute",
		right: 16,
		top: "25%",

		color: "#1B4371",
		fontSize: 16,
	},

	signInButton: {
		marginTop: 27,
	},

	registration: {
		marginTop: 16,
		marginBottom: 111,

		color: "#1B4371",
		fontSize: 16,
		lineHeight: 19,
	},
});
