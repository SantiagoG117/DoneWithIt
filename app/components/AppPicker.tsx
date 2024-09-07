import React from 'react';
import { useState } from 'react';
import { TextInput, View, StyleSheet, Platform, TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';
import defaultStyles from "../config/styles"
import AppText from './AppText';
import AppPickerItem from './AppPickerItem';

/* 
    With a picker component we can select a value from a list of values
*/

function AppPicker({ icon, placeholder, items, onSelectItem, selectedItem  } :any) {

    const [modalVisible, setModalVisible] = useState(false);

    return (

        /* 
        React.Fragment (<></> allows us to wrap multiple components or elements without having to introduce an additional wrapper) 
        
        */
        
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}> 
                <View style={styles.container}>

                    { icon && <MaterialCommunityIcons 
                                    name={icon} 
                                    size={20} 
                                    color={colors.gray} 
                                    style={styles.icon} 
                                />
                    }

                    { selectedItem ? 
                            (<AppText style={styles.text} color ="darkgray">{selectedItem.label}</AppText>) :
                            (<AppText style={styles.text} color ="ligthGray">{placeholder}</AppText>)
                    
                    }

                    <MaterialCommunityIcons 
                        name="chevron-down" 
                        size={20} 
                        color={colors.gray} 
                    />

                </View>
            </TouchableWithoutFeedback>
            
            <Modal
                visible={modalVisible}
                animationType="slide"
            >
                <Button 
                    title='Close' 
                    onPress={() => setModalVisible(false)}
                />
                    <FlatList
                        data={items}
                        keyExtractor={item => item.value.toString()}
                        renderItem={({ item }) => 
                                    <AppPickerItem
                                        label={item.label}
                                        onPress={() => {
                                            /* Close the modal */
                                            setModalVisible(false);
                                            /* 
                                                Event raised by the component when the user selects an item
                                                
                                                Set the selected item in the FlatList as the current item 
                                                using useState. By doing so it displays the selected category
                                            */
                                            onSelectItem(item); 
                                        }}
                                    />}
                    >

                    </FlatList>
            </Modal>
        </>


        
    );
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: "row",
        backgroundColor: colors.backgroundgray,
        borderRadius: 25,
        padding: 15,
        marginVertical: 10 //Allows us to separate multiple text inputs on the same screen. 
    },
    icon:{
        marginRight: 5,
        position:"relative",
        top: 4
    },
    text: {
        flex: 1, //By taking all the available space we are sending the chevron to the right
        fontWeight: 'bold'
    },

})

export default AppPicker;