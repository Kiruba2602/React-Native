import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MenuItems from "./components/SectionList";
import LoginPage from "./components/LoginPage";
import FeedbackPage from "./components/FeedbackPage";
import WelcomeScreen from "./components/WelcomeScreen";
import SectionList from "./components/SectionList";

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: { backgroundColor: "#f4ce14" },
          headerTitleAlign: "center",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      >
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ title: "Home" }}
        />
        <Stack.Screen name="Menu" component={SectionList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = {
  safeArea: {
    flex: 1,
    backgroundColor: "#495E57",
  },
  container: {
    flex: 1,
  },
};
