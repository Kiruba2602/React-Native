import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Welcome to Little Lemon</Text>
      <Text style={styles.innerText} numberOfLines={7}>
        Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but
        casual environment, we would love to hear more about your experience with us!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    fontSize: 30,
    textAlign: "center",
    padding: 40,
    color: "#edefee",
  },
  innerText: {
    color: "#edefee",
    textAlign: "center",
    fontSize: 24,
    marginVertical: 8,
    padding: 20,
  },
});
