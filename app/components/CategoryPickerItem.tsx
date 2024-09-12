import React from 'react';
import { TouchableOpacity, StyleSheet, View} from 'react-native';
import AppIcon from './AppIcon';
import colors from '../config/colors';
import AppText from './AppText';
 
function AppCategoryPickerItem({ item, onPress } : any) {
    return (
        <View 
            style={styles.container}        
        >
            <AppIcon
               backgroundColor={item.backgroundColor}
               name={item.icon}
               size={80}
            />
            <AppText style={styles.label}>{item.label}</AppText>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:25,
        paddingVertical: 15,
        alignItems:"center",
        width: '33%'
    },
    label: {
        marginTop: 5,
        textAlign: "center"

    }
})

export default AppCategoryPickerItem;