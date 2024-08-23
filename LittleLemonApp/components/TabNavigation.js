import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import MenuItems from "./components/SectionList";
import LoginPage from "./components/LoginPage";
import FeedbackPage from "./components/FeedbackPage";
import WelcomeScreen from "./components/WelcomeScreen";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Welcome"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Welcome") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Menu") {
              iconName = focused ? "list" : "list-outline";
            } else if (route.name === "Feedback") {
              iconName = focused ? "chatbubble" : "chatbubble-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Welcome" component={WelcomeScreen} />
        <Tab.Screen name="Menu" component={MenuItems} />
        <Tab.Screen name="Feedback" component={FeedbackPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
