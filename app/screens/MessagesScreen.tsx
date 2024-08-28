import React, { useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native';

import colors from '../config/colors';
import GestureListItem from '../components/GestureListItem';
import ListItemSeparator from '../components/ListItemSeparator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
import StaticListItem from '../components/StaticListItem';

const initialMessages = [
    {
        id: 1,
        title: "T1",
        description: "D1",
        image: require("../appAssets/mosh.jpg")
    },
    {
        id: 2,
        title: "T2",
        description: "D2",
        image: require("../appAssets/mosh.jpg")
    },
];

function MessagesScreen() {
    //? Hooks

    /* 
    To delete an item from the messages array and re-render the component correctly we need to add state in our component. 
    So whenever we update the state, our components (Function or Class components) will get re-rendered. 

    With the addition of hooks, function components have all the capabilities that we have in class components, including a state.
    A Hook is just a JavaScript function that allows us to hook into react features in function components. 
    The always start with the word use... 
    
    The useState hook allows us to add a state to this component:

    var array = useState(initial state data); <- 
    const stateVariable = array[0]; <- The first element of the array is the state variable
    const setState = array[1]; <- The second element of the array is a function for updating the state variable

    Equivalent using destruction syntax:
    const [stateVariable, setState] = useState(initial state data)
    */
    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);


    //?Functions
    const handleDelete = (message: any) => {
        //* Delete the message from messages
        //Get all the messages except the message object
        const newMessages = messages.filter(m => m.id !== message.id );
        
        //Update the state of the components
        setMessages(newMessages);

        //TODO Call the server to delete the message from the backend
    }
    return (
        <SafeAreaView>
            <FlatList
                /* Set the state variable messages as the data source of the <FlatList> component */
                 data={messages}

                 /* Pass a function to extract a unique key from each object in the array*/
                 keyExtractor={m => m.id.toString()}

                 /* Pass a function that takes an item from the data and renders it into the list*/
                 renderItem={({ item }) => (

                    <GestureListItem
                        StaticListItemComponent={
                            <StaticListItem
                                title={item.title}
                                subtitle={item.description}
                                image={item.image}
                            />
                        }
                        onPress={() => console.log("Message selected", item)}
                        renderRightActions={() => 
                        /* Set the function for onPress prop of ListItemDeleteAction */
                        <ListItemDeleteAction
                            onPress={() => handleDelete(item)}
                        />
                    }
                    />
                )}
                 ItemSeparatorComponent={() => <ListItemSeparator/>}
                 refreshing={refreshing}
                 onRefresh={() => [
                    setMessages ([
                        {
                            id: 1,
                            title: "T1",
                            description: "D1",
                            image: require("../appAssets/mosh.jpg")
                        }
                    ])
                 ]}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    
})

export default MessagesScreen;