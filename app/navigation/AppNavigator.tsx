import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";


import EditScreen from "../screens/EditScreen";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";
import NewListingButton from "./NewListingButton";

const Tab = createBottomTabNavigator();
const AppNavigator = () => (
    <Tab.Navigator
        tabBarOptions={{
           
            
        }}
    >
        <Tab.Screen 
            name="Feed" 
            component={FeedNavigator}
            options={{
                tabBarIcon: ({color, size}) => 
                    <MaterialCommunityIcons name="home" color={color} size={size}/>
            }}
        />
        <Tab.Screen 
            name="Listing Edit" 
            component={EditScreen}
            /* 
                options can also take the form of a function that returns an object. React navigator automatically inject
                the navigation and route props in this function
            */
            options= { ({navigation}) => ({ 
                tabBarButton: () => 
                    <NewListingButton onPress={() => navigation.navigate("Listing Edit")}/>,
                tabBarIcon: ({color, size}) => 
                    <MaterialCommunityIcons name="plus-circle" color={color} size={size}/>
            })} 
        />
        <Tab.Screen 
            name="Account" 
            component={AccountNavigator} 
            options={{
                tabBarIcon: ({color, size}) => 
                    <MaterialCommunityIcons name="account" color={color} size={size}/>
            }}
        />
    </Tab.Navigator>
);

export default AppNavigator;