import { Formik } from 'formik';
import React from 'react';

function AppForm({initialValues, onSubmit, validationSchema, children} : any) {
    return (
        <Formik
            initialValues={initialValues}

            validationSchema={validationSchema}

            /* Function that gets called when the form is submitted. */
            onSubmit={onSubmit}
        >
            {/* 
                Formik expect a function with an arg holding different properties like:
                    handleChange(): Keeps track of the state of the form (changes on its initial values)
                    handleSubmit(): Submits the form.
                    errors: Object containing all the errors in the form. For each field we have a key-value pair.
                    setFieldTouched(): Marks the specified field as touched
                    touched: Checks if a field has been touched. It is an object with key value pairs, one for each initialValue

                The function returns a JSX expression, for that reason we add the brackets to the return statement, so we can break down the JSX expression into
                multiple lines.

                A function in react should return only components. Since we have multiple components in a form we must wrap all the components inside a fragment
                (<> </>) and return it.
            */}
            
            {() => (
                <>
                    {children}
                </>
            )}
        </Formik>
    );
}

export default AppForm;