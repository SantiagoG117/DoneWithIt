import React from 'react';
import LottieView from 'lottie-react-native';
import AppText from './AppText';

function AppActivityIndicator({visible}: boolean) {
    
    if(!visible) {
        return null;
    } 
    
    return (
        <LottieView 
            autoPlay
            loop
            style={{flex: 1}}
            source={require('../../assets/animations/loader.json')}
        />
    );
}


export default AppActivityIndicator;