import React from 'react';
import { TextInput, View, StyleSheet, Platform } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';
import defaultStyles from "../config/styles"

function AppTextInput({ icon, ...textInputProps } :any) {
    return (
        <View style={styles.container}>

            { icon && <MaterialCommunityIcons name={icon} size={20} color={colors.gray} style={styles.icon} />}

            <TextInput
                placeholderTextColor={colors.ligthGray}
                style={defaultStyles.text} 
                {...textInputProps} 
            />

        </View>
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
    }

})

export default AppTextInput;