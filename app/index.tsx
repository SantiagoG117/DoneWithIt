import { View, StyleSheet, Text, TextInput  } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


import AppTextInput from "./components/AppTextInput";
import AppPicker from "./components/AppPicker";
import { SetStateAction, useState } from "react";
import LoginScreen from "./screens/LoginScreen";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

export default function App() {
  const [category, setCategory] = useState()

  return (    
    <LoginScreen></LoginScreen>


  );
}





