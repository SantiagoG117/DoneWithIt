import React from 'react';
import { Text, StyleSheet, Platform} from 'react-native';

import colors from '../config/colors';

/* Styles for Text components encapsulated inside a costume component*/

function AppText({children, style, color} : any) {
    return (
        <Text 
            style={[
                    styles.text, 
                    style, 
                    {color: colors[color] || colors.black}]} 
        >
            {/* children is a special property from the props object that allows us to pass inputs in between the Text component*/}
            {children}
        </Text>
    );
}



const styles = StyleSheet.create({
    text: {
        color: "tomato",
        
        /* Returns a Plataform object that spread (...) style properties into the text object based on the current Plataform */
        ...Platform.select({
            ios: {
                fontSize: 20,
                fontFamily: "Avenir",
            },
            android: {
                fontSize: 18,
                fontFamily: "Roboto",
                
            }
        })
       
    }
})

export default AppText;


