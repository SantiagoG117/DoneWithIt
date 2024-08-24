import React from 'react';
import { StyleSheet, Text, TouchableOpacity} from 'react-native';

//?Code imports
import colors from '../config/colors';

function AccessButton({title, onPress ,color }: any) {
    return (
        <TouchableOpacity 
            style={[
                styles.button, 
                /* This second object overrides styles in the styles object. If no color is selected, primary will be set by default. */
                { backgroundColor: colors[color] || colors.primary} // *colors[color] allows us to pick the color dynamically
            ]}
            onPress={onPress} //Handle onPress event and pass the handler from the outside       
        >
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        width: "90%",
        height: 50,
        borderRadius: 25,
        justifyContent: "center",
        alignItems:"center",
        marginBottom: 20
    },
    text: {
        color: colors.white,
        fontSize: 18,
        textTransform: "uppercase",
        fontWeight: "bold"
    }
})


export default AccessButton;