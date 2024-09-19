import React, { useEffect } from 'react';
import { Alert, Image, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import colors from '@/app/config/colors';
import AppIcon from '../AppIcon';
import * as ImagePicker from 'expo-image-picker';

/* 
    This component is a presentational component, it does not maintain a local state. State should be
    provided and maintend by the consumer of this component. 
    onChangeImage is an event raised by this component
*/
function ImageInput({imageUri, onChangeImage} :any) {

  /* 
  async mark tells React that his function will return a primise
  Returns a primuse which represents the eventual result of the asynchronosus operation  
  */
  const requestPermission = async () => {
    // await pauses the execution of the function untila promise is resolved (fulfilled or rejected)
    const result = await ImagePicker.requestMediaLibraryPermissionsAsync(); 
    if (!result.granted)
      alert('You need to enable permission to access the photo library.')
  }
  
  //useEffect() let us perform side effects in function components and synchronize them with an external system
  useEffect( () => {
    //Set up function that connects to an external system. Said function must return a cleanup function with a code that disconnect from the system
    requestPermission();
    },
    [] //A list of dependencies. An empty array ensures that the function inside useEffect gets executed only once.
)

    const handlePress = () => {
        if(!imageUri)
            selectImage();
        else
            Alert.alert('Delete', 'Are you sure you want to delete this image?', 
                        //Array of buttons
                        [
                            //Call the onRemoveImage() method sent by ImageInputList
                            { text: 'Yes', onPress: () => onChangeImage()}, 
                            { text: 'No' }
                        ]
        )
    }


    const selectImage = async () => {
        try {
            /* 
                Display the phone's library for choosing an image. 
                Returns a promise that resolves to an object with cancelled and assets fields.
            */
            const result = await ImagePicker.launchImageLibraryAsync({
                //Configuration object:
                mediaTypes: ImagePicker.MediaTypeOptions.Images, //Alows the user to only select an image, not a video.
                quality: 0.5
            });
            if (!result.canceled){
                //Send the uri of the image picked by the user to the onChangeImage property at the ImageInputList level
                onChangeImage(result.assets[0].uri) 
            }
        } catch (error) {
            console.log("There was an error loading the image", error)
        }
    }    

    return (
    <TouchableWithoutFeedback onPress={handlePress}>
        <View style={styles.imageContainer}>
            {imageUri ? 
                (<Image source={{ uri: imageUri }} style={styles.image}/>) :
                (<AppIcon name="camera-alt" backgroundColor={colors.backgroundgray} iconColor={colors.gray} size={70} />)
            }
        </View>
    </TouchableWithoutFeedback>

            
    );
}

const styles = StyleSheet.create({
    imageContainer : {
        justifyContent:"center",
        alignItems: "center",
        backgroundColor: colors.backgroundgray,
        width: 80,
        height: 80,
        borderRadius: 15,
        overflow: "hidden" //Keeps the round corners of our image
    },
    image : {
        width: '100%',
        height: '100%'
    }
})
export default ImageInput;