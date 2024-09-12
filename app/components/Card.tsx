import React from 'react';
import { Image, ImageSourcePropType, View, StyleSheet, Text } from 'react-native';

import colors from '../config/colors';
import AppText from './AppText';


/* 
    ?@Param: Expects an object with a single property of type ImageSourcePropType
        Consumer of this component can pass as property of the imageSource object require("local/path") for local images or {uri: 'https://remote/path'} for remote images
        ImageSourcePropType: Type that defines the possible values for the 'source' prop in the Image component. It can include Local Image Sources and Remote Image URL
*/
function AppCard({title , subTitle, imageSource} : {title: string, subTitle: string ,imageSource: ImageSourcePropType} ) {
    return (
        <View style={styles.card}>
        
            <Image
                source={imageSource}
                style={styles.image}
            >
            </Image>
            <View style={styles.detailsContainer}>
                <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
                <AppText style={styles.subTitle} color ="secondary" numberOfLines={2}>{subTitle}</AppText>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        paddingBottom: 10,
        overflow: "hidden" //Prevents the image from exceding the borders of the card
    },
    detailsContainer :{
        padding: 10
    },
    detailsImage:{
        width: 75,
        height: 75,
        borderRadius: 37.5
    },
    image: {
        width: "100%",
        height: 200
    },
    subTitle:{
        fontWeight: "bold"
    },
    title: {
        marginBottom: 7
    },
    userDetailsContainer:{
        flexDirection: "row",
        marginTop: 20,
        padding: 10,

    }
})

export default AppCard;