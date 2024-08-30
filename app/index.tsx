import { View, StyleSheet, Text, TextInput  } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


import AppTextInput from "./components/AppTextInput";
import AppPicker from "./components/AppPicker";
import { SetStateAction, useState } from "react";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

export default function App() {
  const [category, setCategory] = useState()

  return (    
    <View>
      <AppPicker 
        /* Sets the category to be displayed on the Picker */
        selectedItem={category}
        /* 
            Event raised by the AppPicker when the user selects an item
            Changes the selected picker and closes the modal
         */
        onSelectItem={(item: SetStateAction<undefined>) => setCategory(item)}

        items={categories} 
        icon="apps" 
        placeholder="Pick category"
      />
    </View>


  );
}





