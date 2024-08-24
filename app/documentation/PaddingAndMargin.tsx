import React from 'react';
import { View, StyleSheet } from 'react-native';

/* 
    ?Padding: Space inside a component
    ?Margin: Space around a component

*/

function PaddingAndMargin() {
    return (
        
        <View style={styles.container}>
        <View style={styles.blueBox}>
            <View style={styles.padding}></View>
        </View>
        <View style={styles.redBox}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent: "center", // Align the buttons across the primary axis
      alignItems:"center" //Align child items (logoContainer) accros the secondary axis
    },
    blueBox: {
      backgroundColor:"dodgerblue",
      width: 100,
      height: 100,
      padding: 25
    },
    padding: {
      backgroundColor:"gold",
      width: 50,
      height: 50,
    },
    redBox: {
      backgroundColor: "tomato",
      width: 100,
      height:100,
      margin:20
    }
})

export default PaddingAndMargin;

