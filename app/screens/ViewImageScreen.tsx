//? 
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

//? Code imports
import colors from '../config/colors';

function ViewImageScreen() {
    return (
        //*Container
        <View style={styles.container}>
            {/* Close Icon */}
            <View style={styles.closeIcon}></View>
            <View style={styles.deleteIcon}></View>
            <Image
                resizeMode='contain' /* Prevents the image to be cut off */
                style={styles.image}
                source={require("../appAssets/chair.jpg")}>
            </Image>
        </View>
    );
}


const styles = StyleSheet.create({
    closeIcon: {
        width: 50,
        height: 50,
        backgroundColor: colors.primary,
        position: 'absolute',
        top: 40,
        left: 30
    },
    deleteIcon: {
        width: 50,
        height: 50,
        backgroundColor: colors.secondary,
        position: 'absolute',
        top: 40,
        right: 30

    },
    container: {
        flex: 1,
        backgroundColor: colors.black
    },
    image: {
        width: '100%',
        height: '100%'
    }
})

export default ViewImageScreen;