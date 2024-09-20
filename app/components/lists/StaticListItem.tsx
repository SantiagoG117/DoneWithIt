import React from 'react';
import { View, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from '../AppText';
import colors from '../../config/colors';


function StaticListItem({title, subtitle, image, IconComponent, style, onPress} : any) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={[styles.container, style]}>
                {/* Render the IconComponent prop only if it is provided */}
                {IconComponent}

                {/* Render the image component only if the image prop is provided */}
                {image && <Image source={image} style={styles.image}/>}

                {/* This container layout the title and subtitle vertically on the right of the image */}
                <View style={styles.detailsContainer}>
                    <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
                    {subtitle && <AppText color = "gray" numberOfLines={2}>{subtitle}</AppText>}
                </View>
                <MaterialCommunityIcons name='chevron-right' color={colors.gray} size={25} />
            </View>
        </TouchableWithoutFeedback>

    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.white,
        flexDirection: "row",
        alignItems: "center",
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