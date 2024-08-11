import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function LittleLemonFooter() {
  return (
    <View style={styles.container}>
      <Text style={styles.footerText}>All Rights Reserved By Little Lemon 2024</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f4ce14",
  },
  footerText: {
    fontSize: 12,
    textAlign: "center",
    padding: 5,
    color: "black",
  },
});
