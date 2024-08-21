import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

//?Code imports
import colors from '../config/colors';

function WelcomeScreen() {
    return (
        
        <ImageBackground
            style={styles.container}
            source={require("../appAssets/background.jpg")}
        >
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={require("../appAssets/logo-red.png")}
                />
                <Text style={styles.tagline}>Sell What you don't need</Text>
            </View>
            <View style={styles.login}></View>
            <View style={styles.register}></View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1, //Image background takes the entire screen
        justifyContent: "flex-end", // Align the buttons across the primary axis
        alignItems:"center" //Align child items (logoContainer) accros the secondary axis 
    },
    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: "center" //Align child items(logo and tagline) accross the secondary axis
    },
    logo: {
        width:100,
        height: 100,
    },
    tagline: {
        fontWeight: "600", // *Gives the text more visibility PREVENTS CROPPING!!
    },
    login: {
        width:"100%",
        height: 70,
        backgroundColor: colors.primary,
    },
    register: {
        width:"100%",
        height: 70,
        backgroundColor: colors.secondary
    },

})

export default WelcomeScreen;

