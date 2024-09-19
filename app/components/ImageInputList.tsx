import React, { useRef } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import ImageInput from './forms/ImageInput';

/* 
    This component allows selecting multiple images by rendering the list of images passed as a prop
    onRemoveImage / onAddImage: props to pass the state outside our component
*/
function ImageInputList({ imageUris = [], onAddImage , onRemoveImage  } :any) {
    /* 
        We can get a reference to an instance of a component 
        useRef() must be initialized with a value that can either be null or ScrollView instance. Therefore we must explicitly define
        the type for the scrollView reference and initialize it with null (Since useRef starts with null before the component mounts)
    */
    const scrollView = useRef<ScrollView>(null);
    
    return (
        <View>
            <ScrollView 
            ref={scrollView} 
            horizontal
            onContentSizeChange={() => scrollView.current?.scrollToEnd()}
            >
                <View style={styles.container}>
                    {/* Fragmentation: Iterate over the imageUris array and render a list of ImageInputComponents, each corresponding to an uri in the array */}
                    {imageUris.map((uri: any) => (
                        /* key prop is essential for react to identify each child element in the list. Should always be in the parent container */
                        <View key={uri} style={styles.image}>
                            <ImageInput 
                                imageUri={uri} //Send the current uri as image uri
                                onChangeImage={ () => onRemoveImage(uri)} //Sends the current uri to the method passed as onRemoveImage
                            />
                        </View>
                    ))}
                    <ImageInput 
                        onChangeImage={ (uri: any) => onAddImage(uri)} //Get the uri sent by the ImageInput component and send it to the FormImagePicker component
                     /> 
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flexDirection: "row",
    },
    image: {
        marginRight: 10
    }
})
export default ImageInputList;