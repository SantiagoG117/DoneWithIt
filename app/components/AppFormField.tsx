import React from 'react';
import AppTextInput from './AppTextInput';
import AppErrorMessage from './AppErrorMessage';

import { useFormikContext } from 'formik';

/* Defines the structure of our Form values. Necessary for TypeScript to infer the types correctly */
interface InitialValues {
    email: string;
    password: string;
    
}

/* Ensures that the name prop is a key of FormValue */
interface AppFormFieldProps {
    name: keyof InitialValues;
    [key: string]: any //*Allows the component to accept any additional props of type any
}

function AppFormField({name, ...otherProps} :AppFormFieldProps) {
    /* 
        With context, we can pass an object fown our component tree without having to drill a property at every level so we can 
        consume that object everywhere in our component tree. FormikContext uses react context to pass all its context down

        useFormik() returns an object containing Formik's state and helpers.
            <InitialValues>: Generic to allow TypeScript to understand the shape of the errors and touched objects
    */
    const {setFieldTouched, handleChange, errors, touched} = useFormikContext<InitialValues>();

    return (
        <>
            <AppTextInput 
                onBlur={() => setFieldTouched(name)}
                onChangeText={handleChange(name)}
                {...otherProps}
            />

            {/* Validation  */}
            <AppErrorMessage error={errors[name]} visible={touched[name]} />

            
        </>
    );
}

export default AppFormField;