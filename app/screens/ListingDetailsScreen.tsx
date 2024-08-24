import React from 'react';
import { Image, View, StyleSheet } from 'react-native';


import AppText from '../components/AppText';
import ListItem from '../components/ListItem';

function ListingDetailsScreen() {
    return (
        <View>
            <Image
                style={styles.image}
                source={require("../appAssets/jacket.jpg")}
            />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>Red jacket for Sale</AppText>
                <AppText style= {styles.price} color = "secondary">$100</AppText>
                <View style={styles.userContainer}>
                    <ListItem
                        image={require("../appAssets/mosh.jpg")}
                        title="Santiago Garcia"
                        subtitle= "5 Listings"
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    detailsContainer :{
        padding: 20
    },
    image:{
        width: "100%",
        height: 300
    },
    title: {
        fontSize: 24,
        fontWeight: "300"
    },
    price: {
        fontWeight: "bold",
        fontSize: 20,
        marginVertical: 10
    },
    userContainer:{
        marginTop: 40
    }

})

export default ListingDetailsScreen;

