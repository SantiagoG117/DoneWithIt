import React from 'react';
import { StyleSheet } from 'react-native';
import AppText from './AppText';

import colors from '../config/colors';

function AppErrorMessage({error, visible: isTouched} :any) {
    /* If the input field for this error has not being touched or no error prop is provided don't render the component */
    if( !isTouched ||!error) return null;
    
    return (
        <AppText color = "red" >{error}</AppText>
    );
}

export default AppErrorMessage;

const styles = StyleSheet.create({
    error: {
        color: 'red'
    }
})