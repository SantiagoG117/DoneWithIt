import React from 'react';
import { useFormikContext } from 'formik';
import AppPicker from '../AppPicker';
import AppErrorMessage from './AppErrorMessage';



//Explicitly define the fields and their type to be used in the component
interface AppFormPickerFields {
    category: string;
}


function AppFormPicker({placeholder ,items, initialValue} : {placeholder: string , items: any[], initialValue: keyof AppFormPickerFields}) {
    const {setFieldValue, values, errors, touched} = useFormikContext<AppFormPickerFields>();

    return (
        <>
            <AppPicker
                items = {items}
                //Event raised when the user selects an item. It sets the selected item as the current value for the passed initialValue
                onSelectItem = {(item:any) => setFieldValue(initialValue, item)}
                placeholder = {placeholder}
                //values is a Formik object that holds the key value pairs for each initial values in our form.
                // The current value of the passed initialValue of the form is set as the selected item.
                selectedItem = {values[initialValue]}
            />

            <AppErrorMessage error={errors[initialValue]} visible={touched[initialValue]} />
        </>

    );
}


export default AppFormPicker;