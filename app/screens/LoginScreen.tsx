import { Image, SafeAreaView, StyleSheet } from 'react-native';
import AppTextInput from '../components/AppTextInput';
import AccessButton from '../components/AccessButton';
import {  Formik } from 'formik';
import * as Yup from 'yup'
import AppErrorMessage from '../components/AppErrorMessage';
import AppFormField from '../components/AppFormField';
import AppSubmitButton from '../components/AppSubmitButton';
import AppForm from '../components/AppForm';


/* 
    Validation Schema: 
        Yub.object().shape() defines an object that contains all the rules for validating our form:
*/
const validationSchema = Yup.object().shape({
    email: Yup.
            string().
            required().
            email() //Should be a valid email address
            .label("Email"),
    password: Yup.
                string().
                required().
                min(4). // Password should be at least 3 characters
                label("Password")
})

function LoginScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <Image
                style={styles.logo}
                source={require("../appAssets/logo-red.png")}
            />
            <AppForm
                initialValues={{email:'', password:''}}

                validationSchema={validationSchema}

                /* Function that gets called when the form is submitted. */
                onSubmit={(values: any) => console.log(values)}
            >
               <AppFormField 
                    icon="email"
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="email-address"
                    name="email"
                    placeholder="Email"
                />

                <AppFormField 
                    autoCapitalize="none"
                    icon="lock"
                    name="password"
                    placeholder="Password"
                    secureTextEntry={true}
                    textContentType="password"
                />

                <AppSubmitButton
                    title="Login"
                />
            </AppForm>



            
        </SafeAreaView>
    );
}

export default LoginScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    logo:{
        width: 80,
        height: 80,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20
    }
})