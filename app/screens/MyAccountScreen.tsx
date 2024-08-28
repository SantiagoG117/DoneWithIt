
import React from 'react';
import {  View, StyleSheet, FlatList } from 'react-native';
import StaticListItem from '../components/StaticListItem';
import AppIcon from '../components/AppIcon';


import colors from '../config/colors';
import ListItemSeparator from '../components/ListItemSeparator';



const menuItems = [
    {
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary
        }
    },
    {
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary
        }
    }
]

function MyAccountScreen() {

    return (
        <View style={styles.container}>
            <View style={styles.itemsContainer}>
                <StaticListItem
                    title="Mosh Hamedani"
                    subtitle="programmingwithmosh@gmail.com"
                    image={require("../appAssets/mosh.jpg")}
                />
            </View>

            <View style={styles.itemsContainer}>
                <FlatList
                    data={menuItems}
                    keyExtractor={menuItem => menuItem.title}
                    renderItem={({ item }) => 
                        <StaticListItem
                            title={item.title}
                            IconComponent={<AppIcon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />}
                        />
                    }
                    ItemSeparatorComponent={() => <ListItemSeparator/>}
                
                />

            </View>

            <View style={styles.itemsContainer}>
                <StaticListItem
                    title="Log Out"
                    IconComponent={<AppIcon name="logout" backgroundColor={colors.yellow}/>}
                />
            </View>

           
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: colors.backgroundgray,
    },
    itemsContainer:{
        marginBottom: 75,
        borderRadius: 15, // Add border radius
        overflow: 'hidden', // Ensure the content respects the border radius
    },
    
})

export default MyAccountScreen;