import React from "react";
import { StyleSheet, View, Text, TextInput, Image } from "react-native";

export default function RegistrationScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.registrationBlock}>
        <View style={styles.avatar}>
          <Image
            style={styles.addButton}
            source={require("../assets/images/add.png")}
          />
        </View>

        <Text style={styles.header}>Registration</Text>

        <View style={styles.inputBlock}>
          <TextInput style={styles.input} placeholder="Login" />

          <TextInput style={styles.input} placeholder="Email" />

          <View style={{ width: "100%" }}>
            <TextInput style={styles.input} placeholder="Password" />

            <Text style={styles.showPassword}>Show</Text>
          </View>
        </View>

        <Text style={styles.registrationButton}>Registration</Text>

        <Text style={styles.signIn}>Already have an account? Sign in</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    width: "100%",
    padding: 16,

    marginBottom: 16,

    fontSize: 16,
    lineHeight: 19,

    backgroundColor: "#f6f6f6",

    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#e8e8e8",
    borderRadius: 8,
  },

  showPassword: {
    position: "absolute",
    right: 16,
    top: "25%",

    color: "#1B4371",
    fontSize: 16,
  },

  registrationButton: {
    width: "100%",

    marginTop: 27,
    padding: 16,

    color: "#fff",
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",

    backgroundColor: "#ff6c00",
    borderRadius: 100,
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
