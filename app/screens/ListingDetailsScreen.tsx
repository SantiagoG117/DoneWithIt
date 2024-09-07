import React from 'react';
import { Image, View, StyleSheet } from 'react-native';


import AppText from '../components/AppText';
import StaticListItem from '../components/lists/StaticListItem';

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
                    <StaticListItem
                     image={require("../appAssets/mosh.jpg")}
                     title="Mosh Hammedani"
                     subtitle= "5 Listings"
                     style={styles.listItemContainer}
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
    listItemContainer:{
        padding:0
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
        marginTop: 5
    }

})

export default ListingDetailsScreen;

