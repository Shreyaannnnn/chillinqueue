import { View, Text, SafeAreaView, ImageBackground, Image, Dimensions } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
// import { styled, withExpoSnack } from 'nativewind';
import TextField from '../components/TextField';
import RadioButtonn from '../components/RadioButton';
import checked from '../components/RadioButton';
import MarginSpacing from '../components/MarginSpacing'
import LinearGradientButton from '../components/LinearGradientButton';
// const StyledView = styled(View);
// const StyledText = styled(Text);
import AntDesign from '@expo/vector-icons/AntDesign';
import { RadioButton } from 'react-native-paper';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage'
const Gender = () => {
    const navigation = useNavigation()
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    })
    const [checked, setChecked] = React.useState('Male');

    const getGender = async() =>{
        console.log("pressed")
        console.log(checked)
        const num = await AsyncStorage.getItem('enteredNumber');

        const data = await axios.post("http://localhost:8000/gender", {val : checked, number : num} )


        navigation.navigate('Bio')
    }


    return (
        <SafeAreaView >
            <ImageBackground style={{ width: "100%", height: "100%" }} source={require('../../assets/images/plainBackground.png')}>
                <AntDesign onPress={() => { navigation.goBack() }} style={{ zIndex: 999, position: 'absolute', top: 60, left: 20 }} name='arrowleft' color={"#fff"} size={30} />
                <View style={{ flex: 1, marginVertical: 70}}>
                    <View style={{ marginTop: 0, marginBottom: 50, alignItems: "center"  }} >
                        <Image style = {{height:100, width:250}} source={require('../../assets/images/chillinq/chillinq.png')} />
                    </View>
                    <View style={{ marginTop: -55, marginBottom: 30, alignItems: "center"  }} >
                        <Image source={require('../../assets/images/chillinq/tick.png')} />
                    </View>
                    <View style={{ marginBottom: 50, alignItems: "center"  }}>
                        <TextField content={"Lets start"} textColor="#fff" fontWeight="bold" fontSize="30" textAlign={'center'} />
                        <View style = {{flexDirection:"row"}}>
                            <TextField content={"Your "} textColor="#fff" fontWeight="bold" fontSize="30" textAlign={"center"}  />
                            <TextField content={"CHILLINQ"} textColor="#e7487f" fontWeight="bold" fontSize="30" textAlign={"center"} />
                        </View>
                        <TextField content={"Journey!"} textColor="#fff" fontWeight="bold" fontSize="30" textAlign={"center"} />
                        <View style={{ marginTop: 20 }} >
                            <TextField content={"Become a"} textColor="#fff" fontSize="22" textAlign={"center"} fontWeight='bold' />
                            <TextField content={"#SerialChiller"} textColor="#e7487f" fontSize="22" textAlign={"center"} fontWeight='bold'/>
                            {/* <Text style={{ color: '#fff', fontSize: 15, textAlign: 'center', }}>Join the flurt Network with</Text> */}
                        </View>
                    </View>







                    <View style={{marginLeft:50}}>
                        <View style={{flexDirection:"row"}}>
                        <RadioButton
                        value="male"
                        status={ checked === 'Male' ? 'checked' : 'unchecked' }
                        onPress={() => setChecked('Male')}
                        />
                        <TextField content={"Male"} textColor="#fff" fontSize="18" textAlign={"center"} MarginTop={10}/>
                    </View>
                    <View style={{flexDirection:"row"}}>
                        <RadioButton
                            value="female"
                            status={ checked === 'Female' ? 'checked' : 'unchecked' }
                            onPress={() => setChecked('Female')}
                        />
                        <TextField content={"Female"} textColor="#fff" fontSize="18" textAlign={"center"} MarginTop={10}/>
                    </View>

                    <View style={{flexDirection:"row"}}>
                        <RadioButton
                            value="nonbinary"
                            status={ checked === 'Non Binary' ? 'checked' : 'unchecked' }
                            onPress={() => setChecked('Non Binary')}
                        />
                        <TextField content={"Non Binary"} textColor="#fff" fontSize="18" textAlign={"center"} MarginTop={10}/>
                    </View>
                </View>
                    
                    
                    
                    
                    
                    
                    <View style={{ width: "100%", alignItems: "center",marginBottom:'20%'  }}>
                        <LinearGradientButton btnHandler={getGender} text="Continue" mt={50} width={"80%"} val={true} bool={true} />
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default Gender
// export default withExpoSnack(Welcome)