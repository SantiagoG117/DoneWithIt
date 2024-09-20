import { Button, SafeAreaView, Text, View } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { DefaultTheme, NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AuthNavigator from "./navigation/AuthNavigator";
import navigationTheme from "./navigation/NavigationTheme";
import AppNavigator from "./navigation/AppNavigator";



export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator></AppNavigator>
    </NavigationContainer>
  );
}





