import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import AppText from './AppText';

import colors from '../config/colors';

function StaticListItem({title, subtitle, image, IconComponent, style} : any) {
    return (
        <View style={[styles.container, style]}>
            {/* Render the IconComponent prop only if it is provided */}
            {IconComponent}

            {/* Render the image component only if the image prop is provided */}
            {image && <Image source={image} style={styles.image}/>}

            {/* This container layout the title and subtitle vertically on the right of the image */}
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{title}</AppText>
                {subtitle && <AppText color = "gray">{subtitle}</AppText>}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.white,
        flexDirection: "row",
        padding:15
    },
    detailsContainer: {
        marginLeft: 5,
        justifyContent:"center",
        flex:1 // Ensures the title and subtitle take up remaining space
    },
    image:{
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 10
    },
    title: {
        fontWeight: "bold"
    },
    subtitle:{
        flexShrink:1 // Allows the subtitle to shrink if needed
    }
})
export default StaticListItem;