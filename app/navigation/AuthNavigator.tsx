import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
        
/* 
  Creates a function that returns an object containing 2 properties, which are in turn React components: 
    <Navigator>: Contains <Screen> elements as its children to define the configuration routes
    <Screen>: Define configuration routes for the different components. 
*/

const Stack = createStackNavigator();
//Function component holding the Navigator component and its Screen children components with respective routes
const AuthNavigator = () => (
    <Stack.Navigator 
            initialRouteName="Welcome"
            screenOptions={{headerStatusBarHeight: 0}}
        >
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
)

export default AuthNavigator;