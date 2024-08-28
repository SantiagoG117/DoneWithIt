import { View, StyleSheet, Text } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


import colors from "./config/colors";
import MyAccountScreen from "./screens/MyAccountScreen";
import ListingDetailsScreen from "./screens/ListingDetailsScreen";
import MessagesScreen from "./screens/MessagesScreen";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import StaticListItem from "./components/StaticListItem";
import ListingsScreen from "./screens/ListingsScreen";

export default function App() {
  return (
    <ListingsScreen/>


  );
}





