import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import AppCard from '../components/Card';
import colors from '../config/colors';



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

function ListingsScreen() {
    return (
        <View style={styles.container}>
            <FlatList
                data={cardList}
                keyExtractor={cardItem => cardItem.id.toString()}
                renderItem={({ item }) => 
                    <AppCard title={item.title} subTitle={item.subtitle} imageSource={item.imageSource} />
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