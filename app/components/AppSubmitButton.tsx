import React from 'react';
import AccessButton from './AccessButton';
import { StyleSheet } from 'react-native';

import { useFormikContext } from 'formik';

function AppSubmitButton({title} :any) {

    const {handleSubmit} = useFormikContext();

    return (
        <AccessButton
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