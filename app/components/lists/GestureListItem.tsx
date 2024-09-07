import React from 'react';
import { StyleSheet, TouchableHighlight } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { Swipeable } from 'react-native-gesture-handler';
import colors from '../../config/colors';

/* 
    To be used in components that require gesture-liked interaction
    with the user
*/

function GestureListItem({StaticListItemComponent, onPress, renderRightActions}: any) {
    return (
        <GestureHandlerRootView>
            <Swipeable renderRightActions={renderRightActions}>
                <TouchableHighlight 
                    underlayColor={colors.ligthGray}
                    onPress={onPress}
                    >
                    {StaticListItemComponent}

                </TouchableHighlight>
            </Swipeable>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    
    detailsContainer: {
        marginLeft: 10,
        justifyContent:"center",
        
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
})

export default GestureListItem;