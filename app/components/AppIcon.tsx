import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppText from './AppText';
import colors from '../config/colors';
import { MaterialIcons as MaterialCommunityIcons } from '@expo/vector-icons';



function AppIcon({name , backgroundColor = colors.black, iconColor = colors.white , size = 40} : any) {
    return (    
        <View style={{
            width: size,
            height: size,
            borderRadius: size / 2,
            backgroundColor,
            justifyContent: "center",
            alignItems:"center"
        }} >
            <MaterialCommunityIcons name={name} size={size * 0.5} color={iconColor}  />
        </View>       
    );
}



export default AppIcon;