import React, { useState } from "react";
import { StyleSheet, TouchableWithoutFeedback, Keyboard, View, Text, TextInput, Image, ImageBackground } from "react-native";
import CommonStyles from "../../styles/CommonStyles";

export default function RegistrationScreen({
	navigation: { navigate },
	route: {
		params: { setIsRegistered },
	},
}) {
	const [login, setLogin] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [hidePassword, setHidePassword] = useState(true);

	const defaultInputStyle = [CommonStyles.input, styles.input];
	const activeInputStyle = [...defaultInputStyle, CommonStyles.inputActive];

	const [loginStyle, setLoginStyle] = useState(defaultInputStyle);
	const [emailStyle, setEmailStyle] = useState(defaultInputStyle);
	const [passwordStyle, setPasswordStyle] = useState(defaultInputStyle);

	// Toggle password visibility
	const togglePasswordVisibility = () => setHidePassword(!hidePassword);

	// Changes input value
	const handleChangeLogin = value => setLogin(value);
	const handleChangeEmail = value => setEmail(value);
	const handleChangePassword = value => setPassword(value);

	// Changes input style to active
	const changeLoginStyle = () => setLoginStyle(activeInputStyle);
	const changeEmailStyle = () => setEmailStyle(activeInputStyle);
	const changePasswordStyle = () => setPasswordStyle(activeInputStyle);

	// Reset input style
	const resetLoginStyle = () => setLoginStyle(defaultInputStyle);
	const resetEmailStyle = () => setEmailStyle(defaultInputStyle);
	const resetPasswordStyle = () => setPasswordStyle(defaultInputStyle);

	// Submit form
	const submitForm = () => {
		console.log({ login: login, email: email, password: password });
		setLogin("");
		setEmail("");
		setPassword("");

		setIsRegistered(true);
	};

	// Go to LoginScreen
	const goToLoginScreen = () => navigate("Login");

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<View style={styles.container}>
				<ImageBackground style={styles.background} source={require("../../assets/images/background.jpg")}>
					<View style={styles.registrationBlock}>
						<View style={styles.avatar}>
							<Image style={styles.addButton} source={require("../../assets/images/add.png")} />
						</View>

						<Text style={styles.header}>Registration</Text>

						<View style={styles.inputBlock}>
							<TextInput style={loginStyle} value={login} placeholder="Login" onChangeText={value => handleChangeLogin(value)} onFocus={changeLoginStyle} onBlur={resetLoginStyle} />

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
							<Text style={[CommonStyles.button, styles.registrationButton]} onPress={submitForm}>
								Registration
							</Text>
						</TouchableWithoutFeedback>

						<Text style={styles.signIn} onPress={goToLoginScreen}>
							Already have an account? Sign in
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
		justifyContent: "flex-end",
	},

	background: {
		flex: 1,
		resizeMode: "cover",
		justifyContent: "flex-end",
	},

	registrationBlock: {
		alignItems: "center",
		paddingLeft: 16,
		paddingRight: 16,
		paddingTop: 92,
		backgroundColor: "#fff",
		borderTopLeftRadius: 25,
		borderTopRightRadius: 25,
	},

	avatar: {
		position: "absolute",
		top: -60,
		width: 120,
		height: 120,
		backgroundColor: "#f6f6f6",
		borderRadius: 16,
	},

	addButton: {
		position: "absolute",
		right: -12,
		bottom: 14,
		width: 25,
		height: 25,
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

	registrationButton: {
		marginTop: 27,
	},

	signIn: {
		marginTop: 16,
		marginBottom: 45,

		color: "#1B4371",
		fontSize: 16,
		lineHeight: 19,
	},
});

// Frame
//
// borderWidth: 1,
// borderStyle: "solid",
// borderColor: "tomato",
