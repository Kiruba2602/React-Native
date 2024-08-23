import * as React from "react";
import { SafeAreaView, ScrollView, Text, StyleSheet, Image, View } from "react-native";

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/headerlogo.png")}
          accessible={true}
          accessibilityLabel="Little Lemon Logo"
        />
      </View>
      <ScrollView>
        <Text style={styles.title}>LittleLemon, your local Mediterranean Bistro</Text>
        <Image
          style={styles.image}
          source={require("../assets/food/bruschetta.jpeg")}
          accessible={true}
          accessibilityLabel="Food Picture 1"
        />
        <Image
          style={styles.image}
          source={require("../assets/food/food2.jpeg")}
          accessible={true}
          accessibilityLabel="Food Picture 2"
        />
        <Image
          style={styles.image}
          source={require("../assets/food/food3.jpeg")}
          accessible={true}
          accessibilityLabel="Food Picture 3"
        />
        <Image
          style={styles.image}
          source={require("../assets/food/food4.webp")}
          accessible={true}
          accessibilityLabel="Food Picture 4"
        />
        <Image
          style={styles.image}
          source={require("../assets/food/greek-salad.webp")}
          accessible={true}
          accessibilityLabel="Food Picture 5"
        />
        <Image
          style={styles.image}
          source={require("../assets/food/lemon-dessert.webp")}
          accessible={true}
          accessibilityLabel="Food Picture 6"
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    marginTop: 25,
    backgroundColor: "#ffffff",
  },
  innerContainer: {
    backgroundColor: "#ecefee",
    paddingHorizontal: 10,
  },
  title: {
    marginTop: 10,
    paddingVertical: 10,
    color: "#333333",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  logo: {
    height: 100,
    width: 300,
    resizeMode: "contain",
    alignContent: "center",
  },
  image: {
    height: 250,
    width: 350,
    resizeMode: "cover",
    borderRadius: 10,
    margin: 6,
  },
});
