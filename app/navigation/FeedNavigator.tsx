import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ListingsScreen from "../screens/ListingsScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";

/* 
  Creates a function that returns an object containing 2 properties, which are in turn React components: 
    <Navigator>: Contains <Screen> elements as its children to define the configuration routes
    <Screen>: Define configuration routes for the different components. 
*/
const Stack = createStackNavigator();
//Function component holding the Navigator component and its Screen children components with respective routes
const FeedNavigator = () => (
    <Stack.Navigator screenOptions={{headerStatusBarHeight: 0}} >
        <Stack.Screen name="Listings" component={ListingsScreen} />
        <Stack.Screen name="ListingDetails" component={ListingDetailsScreen} />
    </Stack.Navigator>
)

export default FeedNavigator;