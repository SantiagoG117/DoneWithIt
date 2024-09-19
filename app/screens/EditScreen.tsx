import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { AppForm, AppFormField, AppSubmitButton } from '../components/forms';

import AppCategoryPickerItem from '../components/CategoryPickerItem';
import AppFormPicker from '../components/forms/AppFormPicker';
import FormImagePicker from '../components/FormImagePicker';

import * as Yup from 'yup';
import useLocation from '../hooks/useLocation';



const validationSchema = Yup.object().shape({
    title: Yup.
            string().
            required().
            min(1)
            .label('Title'),
    price: Yup.
            number().
            required().
            min(1).
            max(10000)
            .label('Price'),
    category: Yup.
                object()
                .required()
                .nullable()
                .label('Category'),
    description: Yup.
                string().
                optional().
                label('Description'),
    images: Yup.
                array()
                .min(1, "Please select at least one image.")
})

const categories = [
    {
        value: 1,
        label: 'Clothes',
        backgroundColor: 'red',
        icon: 'apps'
    },
    {
        value: 2,
        label: 'Forniture',
        backgroundColor: 'green',
        icon: 'email'
    },
    {
        value: 3,
        label: "Camera",
        backgroundColor: 'blue',
        icon: 'lock'
    }
];

function EditScreen() {
    const location = useLocation();
    return (
        <SafeAreaView style={styles.container}>
            <AppForm
                initialValues={{
                    title:'', 
                    price:"", //Eventhough price is a number, it is represented as a string inside the form
                    category:null, // We either have a category or we don't. If we don't its value will be null
                    description:'',
                    images:[] //Set the data type of the images as an empty array
                }}
                onSubmit={(values: any) => console.log(values)}
                validationSchema={validationSchema}
            >
                <FormImagePicker
                    initialValue="images"
                />

                <AppFormField
                    initialValue='title'
                    placeholder='Title'
                    autoCapitalize='words'
                    maxlength={255}
                    
                />

                <AppFormField
                    initialValue='price'
                    placeholder='Price'
                    keyboardType="numeric"
                    maxlength={8}
                    width={170}
                />

                <AppFormPicker 
                    items={categories}
                    initialValue='category'
                    placeholder='Category'
                    width="50%" 
                    AppPickerItemComponent={AppCategoryPickerItem}                
                    numberOfColumns={3}
                />

                <AppFormField 
                    initialValue='description'
                    placeholder='Description'
                    multiline
                    numberOfLines={3}
                />

                <AppSubmitButton title='post' />
                    
               


            </AppForm>
            
            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding:10
    }
})


export default EditScreen;