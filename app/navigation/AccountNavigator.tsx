import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import MyAccountScreen from "../screens/MyAccountScreen";
import MessagesScreen from "../screens/MessagesScreen";


/* 
Creates a function that returns an object containing 2 properties, which are in turn React components: 
<Navigator>: Contains <Screen> elements as its children to define the configuration routes
<Screen>: Define configuration routes for the different components. 
*/
const Stack = createStackNavigator();

//Function component holding the Navigator component and its Screen children components with respective routes
const AccountNavigator= () => (
    <Stack.Navigator screenOptions={{headerStatusBarHeight: 0}}>
        <Stack.Screen name="Account" component={MyAccountScreen} />
        <Stack.Screen name="Messages" component={MessagesScreen} />
    </Stack.Navigator>
)

export default AccountNavigator;