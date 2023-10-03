import {View, SafeAreaView, ImageBackground, Image, TouchableOpacity, StyleSheet, TouchableWithoutFeedback, Keyboard, Text } from 'react-native'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import Fontisto from '@expo/vector-icons/Fontisto';
import axios from 'axios';

import AsyncStorage from '@react-native-async-storage/async-storage'
// import { Nav } from '../../interfaces/navigation';
// import { loginValidation } from '../../helpers/validation';
import TextField from '../../components/TextField';
import LinearGradientField from '../../components/LinearGradientField';
import LinearGradientButton from '../../components/LinearGradientButton';
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
import { firebaseConfig } from '../../../firebase';
// import CookieManager from 'react-native-cookies'
// import AsyncStorage from '@react-native-community/async-storage';
import firebase from 'firebase/compat/app';
// import { withExpoSnack } from 'nativewind';
// import { styled } from 'nativewind';
// import * as AuthSession from 'expo-auth-session';
import 'expo-dev-client'
// const StyledView = styled(View);
// const StyledText = styled(Text);





const Login = () => {

    // await CookieManager.clearAll()


    // const [cookies, setCookie, removeCookie] = useCookies(['user'])

    const navigation = useNavigation();
    const [toggleAgreement, setToggleAgreement] = useState(false);
    const [value, setValue] = useState("");
    const [verificationId, setVerificationId] = useState(null);
    const recaptchaVerifier = useRef(null);
    const getOtp = async() => {
        try{

        // axios.post('http://localhost:8000/signup')
        // .then((response)=>{
        //     const result = value;
        //     const mobileNumber = result;
        // })
        console.log("hi");
        
        console.log(value);
        // console.log(data.data.data.mobileNumber.val)
        // await AsyncStorage.setItem("enteredNumber",data.data.data.mobileNumber.val)
        await AsyncStorage.setItem("enteredNumber",value)
        


        // try {
        //     // console.log(phoneProvider, 'pprovider--')
        //     // console.log(value, recaptchaVerifier.current, '--valss--')
        //     // phoneProvider.verifyPhoneNumber(value, recaptchaVerifier.current).then(setVerificationId);
        //     const phoneProvider = new firebase.auth.PhoneAuthProvider();
        //     phoneProvider.verifyPhoneNumber(`+91 ${value}`, recaptchaVerifier.current).then((phoneAuthSnapshot) => {
        //         // console.log(phoneAuthSnapshot, '-phone snap')
        //         navigation.navigate("Otp", { vid: phoneAuthSnapshot, ph: value, recaptcha: recaptchaVerifier.current })
        //     });
        //     setValue('');
        //     // navigation.navigate("Otp")
        // } catch (error) {
        //     console.log(error)
        // }
        // if (!loginValidation(toggleAgreement, value)) return
        navigation.navigate("Otp", { vid: '', ph: value, recaptcha: '' })
        }
        catch(error){
            console.log('An error occurred:', error.message);
        }
    }





    // const signInWithGoogleAsync = async () => {

    //     try {
    //         console.log("hm");
    //         const config = {
    //             authUrl: 'https://accounts.google.com/o/oauth2/v2/auth',
    //             params: {
    //                 client_id: '746846950632-d1mkhqusec03ed9ankg9sk61qsruheb3.apps.googleusercontent.com',
    //                 response_type: 'id_token',
    //                 scope: 'openid profile email',
    //                 redirect_uri: AuthSession.getRedirectUrl(),
    //                 access_type: 'offline',
    //             },
    //         };
    //         const result = await AuthSession.startAsync(config);
    //         console.log(result, '-res vval-')
    //     } catch (e) {
    //         console.error(e);
    //     }
    // };


    const onChangeVal = (value) => {
        setValue(value)

    }
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })

    })
    // useEffect(() => {

    //     console.log(verificationId, 'vid-')
    //     if (verificationId != '' && verificationId != null) {
    //         navigation.navigate("Otp", { vid: verificationId })
    //     }

    // }, [verificationId])

    // const btnClick = async(val) =>{
        // axios.post('http://localhost:8000/signup')
        // .then((response)=>{
        //     const result = value;
        //     const mobileNumber = result;
        // })
        // const {data} = await axios.post('http://localhost:8000/signup', document.querySelector('#form'), {
        //     headers: {
        //       'Content-Type': 'application/json'
        //     }
        //   })
        //   console.log("hi");
        //   console.log(data);
    // }


    return (
        <SafeAreaView>
            <TouchableOpacity style={{ zIndex: 999 }} activeOpacity={1} onPress={() => { console.log('first'); Keyboard.dismiss() }}>
                <ImageBackground style={{ width: "100%", height: "100%" }} source={require('../../../assets/images/backgroundImage.png')}>
                    <FirebaseRecaptchaVerifierModal ref={recaptchaVerifier} firebaseConfig={firebaseConfig} />
                    <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                        <View style={{ marginTop: 150 }}>
                            <Image source={require('../../../assets/images/chillinq/chillinq2.png')} />
                        </View>
                        <View>
                            <TextField content={"WELCOME TO"} textColor="#fff" fontWeight="bold" fontSize="45" />
                            <TextField content={"CHILLINQ"} textColor="#e7487f" fontWeight="bold" fontSize="45" textAlign={"center"} />
                            <View style={{ marginVertical: 15 }}>
                                <TextField content={"Register with Your"} textColor="#fff" fontSize="15" textAlign={"center"} />
                                <TextField content={"Mobile No."} textColor="#fff" fontSize="15" textAlign={"center"} />
                                {/* <Text style={{ color: '#fff', fontSize: 15, textAlign: 'center', }}>Join the flurt Network with</Text> */}
                            </View>
                        </View>

                    </View>
                    <LinearGradientField id='form' width="80%" ph="Mobile No." ktype='numeric' maxLength={10} value={value} onChange={onChangeVal}/>



                    <View style={{ width: "80%", alignSelf: "center", alignItems: 'center', flexDirection: 'row', marginVertical: 15 }}>
                        <TouchableOpacity style={{ backgroundColor: !toggleAgreement ? "#fff" : 'black' }} onPress={() => { setToggleAgreement(!toggleAgreement) }}>
                            <Fontisto name={toggleAgreement ? "checkbox-active" : "checkbox-passive"} color={"#fff"} size={18} />
                        </TouchableOpacity>
                        <TextField content={"I agree to the Terms of use and Privacy Policy"} textColor='#fff' fontSize={"14"} ml={Number(10)} />
                    </View >
                    <View style={{ opacity: (value && toggleAgreement) ? 1 : 0.3 }}>
                        <LinearGradientButton btnHandler={getOtp} text="Get OTP" mt={50} width={"80%"} val={value} bool={toggleAgreement} /*onPress = {btnClick}*/ />
                    </View>


                    {/* <StyledView className='bg-red-400 p-5 m-3'>
                        <TouchableOpacity onPress={signInWithGoogleAsync}>
                            <StyledText className='text-center font-bold'>Login</StyledText>
                        </TouchableOpacity>
                    </StyledView> */}
                </ImageBackground>

            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Login