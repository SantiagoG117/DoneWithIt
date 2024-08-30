import React from 'react';
import { useState } from 'react';
import { TextInput, View, StyleSheet, Platform, TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';
import defaultStyles from "../config/styles"
import AppText from './AppText';
import AppPickerItem from './AppPickerItem';

function AppPicker({ icon, items, onSelectItem, placeholder, selectedItem  } :any) {

    const [modalVisible, setModalVisible] = useState(false);

    return (

        /* 
        React.Fragment (<></> allows us to wrap multiple components or elements without having to introducr an additional wrapper) 
        
        */
        
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}> 
                <View style={styles.container}>
                    { icon && <MaterialCommunityIcons 
                                    name={icon} 
                                    size={20} 
                                    color={colors.gray} 
                                    style={styles.icon} 
                                />}
                    <AppText style={styles.text}>{selectedItem ? selectedItem.label : placeholder}</AppText>
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
                <Button title='Close' onPress={() => setModalVisible(false)}/>
                    <FlatList
                        data={items}
                        keyExtractor={item => item.value.toString()}
                        renderItem={({ item }) => 
                                    <AppPickerItem
                                        label={item.label}
                                        onPress={() => {
                                            /* Close the modal */
                                            setModalVisible(false);
                                            /* Display the selected category  */
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
        flex: 1 //By taking all the available space we are sending the chevron to the right
    }

})

export default AppPicker;