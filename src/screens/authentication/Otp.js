import {View, SafeAreaView, ImageBackground, TouchableOpacity, TextInput, ToastAndroid } from 'react-native'
import React, { FC, useEffect, useLayoutEffect, useRef, useState } from 'react'
import TextField from '../../components/TextField'
import { useNavigation } from '@react-navigation/native'
// import { Nav } from '../../interfaces/navigation'
import AntDesign from '@expo/vector-icons/AntDesign';
import MarginSpacing from '../../components/MarginSpacing'
// import { otpValidation } from '../../helpers/validation'
import LinearGradientField from '../../components/LinearGradientField'
import LinearGradientButton from '../../components/LinearGradientButton'
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
import { firebaseConfig } from '../../../firebase';
import firebase from 'firebase/compat/app';
// import Login from '../authentication/Login';
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios';


const Otp = ({ route }) => {
    const { vid, ph, recaptcha } = route?.params
    // console.log(route.params, '-vid--')
    const navigation = useNavigation();
    const pin1Ref = useRef()
    const pin2Ref = useRef()
    const pin3Ref = useRef()
    const pin4Ref = useRef()
    const pin5Ref = useRef()
    const pin6Ref = useRef()
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [num3, setNum3] = useState("");
    const [num4, setNum4] = useState("");
    const [num5, setNum5] = useState("");
    const [num6, setNum6] = useState("");
    const [verificationId, setVerificationId] = useState(null);
    // const recaptchaVerifier = useRef(null);
    const resendOtp = () => {
        // navigation.navigate('Welcome')
        return
        if (!ph) {
            return
        }
        try {
            const phoneProvider = new firebase.auth.PhoneAuthProvider();
            // console.log(phoneProvider, 'pprovider--')
            // console.log(value, recaptchaVerifier.current, '--valss--')
            // phoneProvider.verifyPhoneNumber(value, recaptchaVerifier.current).then(setVerificationId);
            phoneProvider.verifyPhoneNumber(`+91 ${ph}`, recaptcha).then((phoneAuthSnapshot) => {
                console.log(phoneAuthSnapshot, '-new otp phone snap')
                ToastAndroid.show('Otp Resend Successfully', ToastAndroid.SHORT);
            });
            // setValue('');
        } catch (error) {
            console.log(error)
        }
    }
    // AHTqx5bB-A8NosvVuMQYuynS_NCn_EvTVjz5cDf6aJFvYk62tpPBEg-hzM5x4Rp5E-sH9aFGceJatjBIXQg7XzLXM6btvVOHynmrKXiSz6Vgc-PwNHs7gKOK6EtrB7Mguy1lAkHbnFctIDYChMMtvov-GPzsISt9Lyocxfx4AT0waCisRk5jfiV_G_AQcam4iWkngOHZp8MtYqqYXhxAVI1S7Bi2wVdic3m-GQ-aGoSzuz8NcWdPsEs
    const onChangeValOfPin1 = (pin) => {
        setNum1(pin)
        if (pin != "") {
            pin2Ref?.current?.focus()
        }
    }
    const onChangeValOfPin2 = (pin) => {
        setNum2(pin)
        if (pin != "") {
            pin3Ref?.current?.focus()
        }
    }
    const onChangeValOfPin3 = (pin) => {
        setNum3(pin)
        if (pin != "") {
            pin4Ref?.current?.focus()
        }

    }
    const onChangeValOfPin4 = (pin) => {
        setNum4(pin)
        if (pin != "") {
            pin5Ref?.current?.focus()
        }
    }
    const onChangeValOfPin5 = (pin) => {
        setNum5(pin)
        if (pin != "") {
            pin6Ref?.current?.focus()
        }
    }
    const onChangeValOfPin6 = (pin) => {
        setNum6(pin)

    }

    const submitOtp = async () => {
        // if (!otpValidation(num1, num2, num3, num4)) return;
        // let code = `${num1}${num2}${num3}${num4}${num5}${num6}`
        // console.log(code, 'code--')
        // try {
        //     const credential = firebase.auth.PhoneAuthProvider.credential(route.params.vid, code);
        //     // const credential = firebase.auth.PhoneAuthProvider.credential("AHTqx5bB-A8NosvVuMQYuynS_NCn_EvTVjz5cDf6aJFvYk62tpPBEg-hzM5x4Rp5E-sH9aFGceJatjBIXQg7XzLXM6btvVOHynmrKXiSz6Vgc-PwNHs7gKOK6EtrB7Mguy1lAkHbnFctIDYChMMtvov-GPzsISt9Lyocxfx4AT0waCisRk5jfiV_G_AQcam4iWkngOHZp8MtYqqYXhxAVI1S7Bi2wVdic3m-GQ-aGoSzuz8NcWdPsEs", "579823");
        //     firebase.auth().signInWithCredential(credential).then(() => {
        //         ToastAndroid.show('Otp Verified Successfully', ToastAndroid.SHORT);
        //         setNum1('')
        //         setNum2('')
        //         setNum3('')
        //         setNum4('')
        //         setNum5('')
        //         setNum6('')
        //     })
        //     // navigation.navigate("AccountCreationSuccess");
        // } catch (error) {
        //     console.log(error)
        // }
        // navigation.navigate("AccountCreationSuccess");
        console.log("OTP Pressed");
        const value = await AsyncStorage.getItem('enteredNumber');

        navigation.navigate('Gender')
        const data = await axios.post("http://localhost:8000/signup", {val : value} )
        

        console.log(value)
        console.log(data.data)

    }
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    })

    return (
        <SafeAreaView>
            <ImageBackground style={{ width: "100%", height: "100%" }} source={require('../../../assets/images/backgroundImage.png')}>
                <View style={{ flex: 1 }}>
                    <AntDesign onPress={() => { navigation.goBack() }} style={{ zIndex: 999, position: 'absolute', top: 60, left: 20 }} name='arrowleft' color={"#fff"} size={30} />
                    <View style={{ justifyContent: 'center', alignItems: 'center', height: "100%" }}>
                        <View style={{ marginBottom: 30 }} >
                            <TextField content={"OTP"} textColor="#fff" fontSize={"24"} fontWeight="bold" />
                        </View>
                        <TextField content={"Please Enter the 6-digit Code sent  "} textColor="#fff" fontSize={"18"} />
                        <TextField content={"to your Mobile No. "} textColor="#fff" fontSize={"18"} mb={20} />
                        <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "center" }}>
                            <LinearGradientField width="12%" ktype='numeric' maxLength={1} value={num1} onChange={onChangeValOfPin1} innerRef={pin1Ref} />
                            <MarginSpacing marginHorizontal={3} />
                            <LinearGradientField width="12%" ktype='numeric' maxLength={1} value={num2} onChange={onChangeValOfPin2} innerRef={pin2Ref} />
                            <MarginSpacing marginHorizontal={3} />
                            <LinearGradientField width="12%" ktype='numeric' maxLength={1} value={num3} onChange={onChangeValOfPin3} innerRef={pin3Ref} />
                            <MarginSpacing marginHorizontal={3} />
                            <LinearGradientField width="12%" ktype='numeric' maxLength={1} value={num4} onChange={onChangeValOfPin4} innerRef={pin4Ref} />
                            <MarginSpacing marginHorizontal={3} />
                            <LinearGradientField width="12%" ktype='numeric' maxLength={1} value={num5} onChange={onChangeValOfPin5} innerRef={pin5Ref} />
                            <MarginSpacing marginHorizontal={3} />
                            <LinearGradientField width="12%" ktype='numeric' maxLength={1} value={num6} onChange={onChangeValOfPin6} innerRef={pin6Ref} />
                        </View>
                        <TouchableOpacity style={{ marginVertical: 40 }} onPress={resendOtp}>
                            <TextField content={"Resend OTP"} textColor="#fff" fontSize={"14"} tdl="underline" />
                        </TouchableOpacity>
                        <MarginSpacing marginVertical={15} />
                        <LinearGradientButton btnHandler={submitOtp} text="Submit OTP" width={"80%"} val={"true"} bool={true} />

                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView >
    )
}

export default Otp