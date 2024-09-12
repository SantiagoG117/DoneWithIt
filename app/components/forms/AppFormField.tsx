import React from 'react';
import AppTextInput from '../AppTextInput';
import AppErrorMessage from './AppErrorMessage';

import { useFormikContext } from 'formik';

/* Defines the structure of our Form values. Necessary for TypeScript to infer the types correctly */
interface InitialValues {
    description: string;
    email: string;
    name: string;
    password: string;
    price: string;
    title: string;
}

/* Ensures that the initialValue prop is a key of FormValue */
interface AppFormFieldProps {
    initialValue: keyof InitialValues;
    [key: string]: any //*Allows the component to accept any additional props of type any
}

function AppFormField({initialValue, width ,...otherTextInputProps} :AppFormFieldProps) {
    /* 
        With context, we can pass an object to our component tree without having to drill a property at every level so we can 
        consume that object every   where in our component tree. FormikContext uses react context to pass all its context down

        useFormikContext() returns an object containing Formik's state and helpers.
            <InitialValues>: Generic to allow TypeScript to understand the shape of the errors and touched objects
    */
    const {setFieldTouched, handleChange, errors, touched} = useFormikContext<InitialValues>();

    return (
        <>
            <AppTextInput 
                onBlur={() => setFieldTouched(initialValue)}
                onChangeText={handleChange(initialValue)}
                width={width}
                {...otherTextInputProps}
            />

            {/* Validation  */}
            <AppErrorMessage error={errors[initialValue]} visible={touched[initialValue]} />

            
        </>
    );
}

export default AppFormField;