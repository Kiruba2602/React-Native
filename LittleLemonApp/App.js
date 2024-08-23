import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import MenuItems from "./components/SectionList";
import LoginPage from "./components/LoginPage";
import FeedbackPage from "./components/FeedbackPage";
import WelcomeScreen from "./components/WelcomeScreen";
import Settings from "./components/SettingsPage";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation>
        <Drawer.Screen name="Welcome" component={WelcomeScreen} />
        <Drawer.Screen name="Menu" component={MenuItems} />
        <Drawer.Screen name="Settings" component={Settings} />
        <Drawer.Screen name="Feedback" component={FeedbackPage} />
        <Drawer.Screen name="Logout" component={LoginPage} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
