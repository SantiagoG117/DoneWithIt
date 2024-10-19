import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import AppCard from '../components/Card';
import colors from '../config/colors';
import routes from '../navigation/routes';
    import listingsApi from '../api/listings';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import AppActivityIndicator from '../components/AppActivityIndicator';
import useApi from '../hooks/useApi';



function ListingsScreen({navigation} :any) {

    //Call the api and reference one of its functions. 
    const {data: listings, error, loading, request: loadListings} = useApi(listingsApi.getListings);

    //?Call the API the first time the component gets render
    useEffect(() => {
        loadListings();
    }, [])
   

    return (
        <View style={styles.container}>
            {/* Error component */}
            {error && <>
                <AppText>Couldn't retrieve the listings</AppText>
                <AppButton title='Retry' onPress={loadListings}/>
            </>}

            <AppActivityIndicator visible={loading} />
            
            <FlatList
                data={listings}
                keyExtractor={cardItem => cardItem.id.toString()}
                renderItem={({ item }) => 
                    <AppCard 
                        title={item.title} 
                        subTitle={item.price} 
                        imageSource={item.images[0].url} 
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