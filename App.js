import React from "react";
import { StyleSheet, ImageBackground, View } from "react-native";

import RegistrationScreen from "./Screens/RegistrationScreen";
// import LoginScreen from "./Screens/LoginScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={require("./assets/images/background.jpg")}
      >
        <RegistrationScreen />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },

  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
