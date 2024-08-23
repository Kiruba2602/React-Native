import React, { useState } from "react";
import { Text, ScrollView, StyleSheet, TextInput, KeyboardAvoidingView, Platform, Button } from "react-native";

const FeedbackPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");
  const [feedBack, setFeedBack] = useState("");

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "position"}>
      <ScrollView keyboardDismissMode="none">
        <Text style={styles.headingSection}>How was your visit to Little Lemon?</Text>
        <Text style={styles.infoSection}>
          Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but
          casual environment. We would love to hear your experience with us!
        </Text>
        {!feedBack && (
          <>
            <TextInput
              secureTextEntry={true}
              style={styles.input}
              placeholder={"Enter your firstname"}
              value={firstName}
              onChangeText={setFirstName}
            />
            <TextInput
              style={styles.input}
              placeholder={"Enter your lastname"}
              value={lastName}
              onChangeText={setLastName}
            />
            <TextInput
              style={styles.messageInput}
              value={message}
              onChangeText={setMessage}
              placeholder={"Enter your feedback"}
              multiline={true}
            />
            <Button
              color={"#F4CE14"}
              title="Submit"
              onPress={() => setFeedBack(!feedBack)}
              accessibilityLabel="Submit button"
            />
          </>
        )}
        {feedBack && (
          <>
            <Text style={styles.regularText}>Thank you for your feedback...</Text>
            <Button title="Add Feedback" color={"#F4CE14"} onPress={() => setFeedBack(!feedBack)}  />
          </>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: "EDEFEE",
    backgroundColor: "#ecefee",
  },
  messageInput: {
    height: 100,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    backgroundColor: "#ecefee",
    alignContent: "start",
  },
  infoSection: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
    backgroundColor: "#495E57",
  },
  headingSection: {
    fontSize: 28,
    padding: 20,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
    backgroundColor: "#495E57",
  },
  submitButton: {
    marginVertical: 80,
    borderRadius: 20,
    backgroundColor: "#F4CE14",
  },
  regularText: {
    fontSize: 24,
    alignSelf: "center",
  },
});

export default FeedbackPage;
