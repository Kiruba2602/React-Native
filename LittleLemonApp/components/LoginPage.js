import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";

const LoginPage = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showLogin, setShowLogin] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.headerText}>Welcome to Little Lemon</Text>
        <Text style={styles.regularText}>Login to continue</Text>
        <TextInput
          style={styles.inputBox}
          value={email}
          onChangeText={setEmail}
          placeholder={"Enter your email"}
          keyboardType={"email-address"}
          clearButtonMode={"while-editing"}
        />
        <TextInput
          style={styles.inputBox}
          value={password}
          onChangeText={setPassword}
          placeholder={"Enter your password"}
          keyboardType={"default"}
          secureTextEntry={true}
        />
        <Pressable
          style={styles.button}
          onPress={() => {
            navigation.navigate("Welcome");
          }}
        >
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  innerContainer: {
    elevation: 1,
  },
  headerText: {
    padding: 40,
    fontSize: 34,
    color: "#000",
    textAlign: "center",
  },
  regularText: {
    fontSize: 28,
    padding: 12,
    marginVertical: 8,
    color: "#000",
    textAlign: "center",
  },
  inputBox: {
    height: 46,
    margin: 12,
    marginHorizontal: 22,
    borderWidth: 1,
    padding: 10,
    fontSize: 18,
    borderColor: "EDEFEE",
    backgroundColor: "#EDEFEE",
  },
  button: {
    fontSize: 22,
    padding: 8,
    marginVertical: 10,
    margin: 130,
    backgroundColor: "#F4CE14",
    borderColor: "#EDEFEE",
    borderWidth: 2,
    borderRadius: 30,
  },
  buttonText: {
    color: "#000",
    textAlign: "center",
    fontSize: 24,
  },
  bgImg: {
    flex: 1,
    justifyContent: "center",
  },
});

export default LoginPage;
