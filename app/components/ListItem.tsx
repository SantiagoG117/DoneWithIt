import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

import AppText from './AppText';


function ListItem({title, subtitle, image}: any) {
    return (
        <View style={styles.container}>
            <Image
                source={image}
                style={styles.image}
            />
            {/* This container layout the title and subtitle vertically on the right of the image */}
            <View>
                <AppText style={styles.title}>{title}</AppText>
                <AppText color = "gray">{subtitle}</AppText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
    },
    image:{
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 10
    },
    title: {
    fontWeight: "bold"
    }
})

export default ListItem;