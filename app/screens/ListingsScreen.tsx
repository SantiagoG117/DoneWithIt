import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import AppCard from '../components/Card';
import colors from '../config/colors';
import routes from '../navigation/routes';


const cardList = [
    {
        id: 1,
        title: "Red Jacket for sale",
        subtitle: "$100",
        imageSource: require("../appAssets/jacket.jpg")
    },
    {
        id: 2,
        title: "Couch in great condition",
        subtitle: "$1000",
        imageSource: require("../appAssets/couch.jpg")
    }

]

function ListingsScreen({navigation} :any) {
    return (
        <View style={styles.container}>
            <FlatList
                data={cardList}
                keyExtractor={cardItem => cardItem.id.toString()}
                renderItem={({ item }) => 
                    <AppCard 
                        title={item.title} 
                        subTitle={item.subtitle} 
                        imageSource={item.imageSource} 
                        /* Pass each item as a second parameter to the ListingDetails */
                        onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
                    />
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: colors.backgroundgray
    }
    
})
export default ListingsScreen;