import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

//?Code imports
import colors from '../config/colors';
import AppButton from '../components/AppButton';


function WelcomeScreen({navigation} :any) {
    return (
        
        <ImageBackground
            style={styles.container}
            source={require("../appAssets/background.jpg")}
            blurRadius={5}
        >
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={require("../appAssets/logo-red.png")}
                />
                <Text style={styles.tagline}>Sell What You don't Need</Text>
            </View>
            <AppButton title="login" onPress={() => navigation.navigate("Login")} />
            <AppButton title="register" color = "secondary" onPress={() => navigation.navigate("Register")} />
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
        marginBottom: 10
    },
    tagline: {
        fontWeight: "600", // *Gives the text more visibility PREVENTS CROPPING!!
        fontSize: 25
    },

})

export default WelcomeScreen;

