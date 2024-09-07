import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { AppForm, AppFormField, AppSubmitButton } from '../components/forms';
import * as Yup from 'yup'

/* 
    TODO:
        ! Add validation
        ! Add onTouch behavior
*/

const validationSchema = Yup.object().shape({
    name: Yup
        .string()
        .required()
        .label("Name"),
    email: Yup
        .string()
        .required()
        .email()
        .label("Email"),
    password: Yup
        .string()
        .required()
        .min(4)
        .label("Password")
});

function RegisterScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <AppForm
                initialValues={{name:'', email: '', password:'', }}
                onSubmit={(values: any) => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField
                    initialValue='name'
                    icon="account"
                    placeholder="Name"
                    autoCapitalize='words'
                />

                <AppFormField 
                    icon="email"
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="email-address"
                    initialValue="email"
                    placeholder="Email"
                />   

                <AppFormField 
                    autoCapitalize="none"
                    icon="lock"
                    initialValue="password"
                    placeholder="Password"
                    secureTextEntry={true}
                    textContentType="password"
                />

                <AppSubmitButton title='Register'/>
            </AppForm>


        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    }
})

export default RegisterScreen;