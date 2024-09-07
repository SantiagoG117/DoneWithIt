import React from 'react';
import AppButton from '../AppButton';
import { StyleSheet } from 'react-native';

import { useFormikContext } from 'formik';

function AppSubmitButton({title} :any) {

    /* hanbdleSubmit() submits the Formik form*/
    const {handleSubmit} = useFormikContext();

    return (
        <AppButton
            style={styles.button}
            title={title}
            onPress={handleSubmit}
        />
    );
}

const styles = StyleSheet.create({
    button: {
        width: '100%'
    }
})

export default AppSubmitButton;