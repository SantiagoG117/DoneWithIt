import React from 'react';
import ImageInputList from './ImageInputList';
import { AppErrorMessage } from './forms';
import { useFormikContext } from 'formik';




/* 
    Array of uris is send to this component
    Logic for adding or removing an uri is defined in this component
*/
function FormImagePicker({initialValue} : any) {
    const {
        /* setFieldValue and values keep the state of the images uri list*/

        setFieldValue,  //Set the value of the given initialValue 
        values, // Keeps track of the current value of the given initialValue
        errors, 
        touched} = useFormikContext<any>();

    const imageUris = values[initialValue]; //Get the values (uris) under the initialValue prop
    

    const handleAdd = (uri: string) => {
        //Use spread... operator to take a copy of the original array and add the uri at the end
        setFieldValue(initialValue, [...imageUris, uri])
    }

    const handleRemove = (uri: string) => {
        //Get all uri except the one passed to this function
        setFieldValue(initialValue, imageUris.filter((imageUri :any) => imageUri != uri))}

    return (
        <>
            <ImageInputList
                imageUris={imageUris} //Send the values under the initialValue prop as the list of imageUris
                onAddImage={handleAdd}// Send the uri sent by ImageInputList to the handleAdd method
                onRemoveImage={handleRemove}
            />
            <AppErrorMessage error={errors[initialValue]} visible={touched[initialValue]} />
        </>
    );
}

export default FormImagePicker;