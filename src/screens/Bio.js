import { View, Text, SafeAreaView, ImageBackground, Image, TextInput,TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useEffect, useRef, useState } from 'react'
import * as ImagePicker from 'expo-image-picker';

import { useNavigation } from '@react-navigation/native'
// import { styled, withExpoSnack } from 'nativewind';
import TextField from '../components/TextField';
import RadioButtonn from '../components/RadioButton';
import MarginSpacing from '../components/MarginSpacing'
import LinearGradientButton from '../components/LinearGradientButton';
// const StyledView = styled(View);
// const StyledText = styled(Text);
import AntDesign from '@expo/vector-icons/AntDesign';
import InputImage from '../components/InputImage';
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios';
// import ImagePicker from 'react-native-image-picker';




const Welcome = () => {
    const navigation = useNavigation()
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    })

    const [name, setName] = useState(" ");
    const [about, setAbout] = useState(" ");

    const onChangeText = (name) => {
        setName(name)
        console.log(name);
    }
    // const onChangeName = (event) => {
    //     event.persist(); // Release the synthetic event from the pool
    //     const newName = event.nativeEvent.text;
    //     setName(newName);
    //   };


    const onChangeAbout = (about) => {
        setAbout(about)
    }


    const submit = async() =>{
        const num = await AsyncStorage.getItem('enteredNumber');
        console.log(selectedImage1);
        const data = await axios.post("http://localhost:8000/about", {namee:name, aboutt:about, number : num, firstImage:selectedImage1, secondImage:selectedImage2, thirdImage:selectedImage3, fourthImage:selectedImage4} )
        
        navigation.navigate('Menu')
    }



    // INPUT IMAGES

    const [selectedImage1, setSelectedImage1] = useState(null);
    
    const [selectedImage2, setSelectedImage2] = useState(null);
    const [selectedImage3, setSelectedImage3] = useState(null);
    const [selectedImage4, setSelectedImage4] = useState(null);

    const pickImage1 = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: false,
        aspect: [3, 2],
        quality: 1,
        });

        if (!result.canceled) {
        let selectedAsset = result.assets[0];
        let selectedUri = selectedAsset.uri;
        console.log(selectedUri);
        // const base64Data = `data:image/jpeg;base64,${result.base64}`;
        setSelectedImage1(selectedUri);
        }
    };


    // const pickImage1 = () => {
    //     ImagePicker.showImagePicker({}, response => {
    //       if (response.uri) {
    //         // Convert image to base64 string
    //         const base64Data = 'data:${response.type};base64,${response.data}';
    //         setSelectedImage1(base64Data);
    //       }
    //     });
    //   };

    const pickImage2 = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: false,
        aspect: [3, 2],
        quality: 1,
        });

        if (!result.canceled) {
        let selectedAsset = result.assets[0];
        let selectedUri = selectedAsset.uri;
        setSelectedImage2(selectedUri);
        }
    };

    const pickImage3 = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: false,
        aspect: [3, 2],
        quality: 1,
        });

        if (!result.canceled) {
        let selectedAsset = result.assets[0];
        let selectedUri = selectedAsset.uri;
        setSelectedImage3(selectedUri);
        }
    };

    const pickImage4 = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: false,
        aspect: [3, 2],
        quality: 1,
        });

        if (!result.canceled) {
        let selectedAsset = result.assets[0];
        let selectedUri = selectedAsset.uri;
        setSelectedImage4(selectedUri);
        }
    };








    return (
        <SafeAreaView>
            <ImageBackground style={{ width: "100%", height: "100%" }} source={require('../../assets/images/plainBackground.png')}>
                <AntDesign onPress={() => { navigation.goBack() }} style={{ zIndex: 999, position: 'absolute', top: 60, left: 20 }} name='arrowleft' color={"#fff"} size={30} />
                <View style={{ flex: 1, marginVertical: 50}}>
                    <View style={{ marginTop: 0, marginBottom: 50, alignItems: "center"  }} >
                        <Image style = {{height:100, width:250 ,marginBottom:-45}} source={require('../../assets/images/chillinq/chillinq.png')} />
                    </View>
                    <TextField content={"Name"} textColor="#fff" fontSize="21" alignItems={"flex-start"} ml={"12%"} mb={2}/>
                    <TextInput maxLength={25} placeholderTextColor={"#fff"} value={name} onChangeText={onChangeText} style={{
                        padding: 0,
                        height:50,
                        alignSelf: 'center',
                        justifyContent: 'center',
                        // backgroundColor: "#413f60",
                        borderWidth:0.6,
                        borderRadius:10,
                        borderColor:"#fff",
                        width: '80%',
                        margin: 1,
                        borderRadius: 5,
                        color: '#fff',
                        // fontSize: ktype == "numeric" ? 20 : 16
                        fontSize:18,
                        marginBottom:25
                    }} />

                    <TextField content={"Upload 4 photos of yourself"} textColor="#fff" fontSize="21" alignItems={"flex-start"} ml={"12%"} mb={12}/>
                    {/* <InputImage/> */}

                    <View style={{flexDirection:"row", marginHorizontal:20, marginBottom:-55}}>

                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' ,marginBottom:40}}>
                            {selectedImage1 && <Image source={{ uri: selectedImage1 }} style={{ width: 74, height: 74,position:'absolute', zIndex:9999, borderRadius:14 }} />}

                                <TouchableOpacity
                                // style={{height:30, width:30}}
                                activeOpacity={0.9} onPress={pickImage1}>
                                <Image source={require('../../assets/images/chillinq/imgupload.png')} height={30} width={30}/>
                                </TouchableOpacity>

                            {/* <Button title="Pick an image from gallery" onPress={pickImage} /> */}
                            {/* {selectedImage && (
                            <Text style={{ marginTop: 10 }}></Text>
                            )} */}

                            </View>



                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' ,marginBottom:40}}>
                            {selectedImage2 && <Image source={{ uri: selectedImage2 }} style={{ width: 74, height: 74,position:'absolute', zIndex:9999, borderRadius:14 }} />}

                                <TouchableOpacity
                                // style={{height:30, width:30}}
                                activeOpacity={0.5} onPress={pickImage2}>
                                <Image source={require('../../assets/images/chillinq/imgupload.png')} height={30} width={30}/>
                                </TouchableOpacity>
                            </View>

                            {/* <Button title="Pick an image from gallery" onPress={pickImage} /> */}
                            {/* {selectedImage && (
                            <Text style={{ marginTop: 10 }}></Text>
                            )} */}

                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' ,marginBottom:40}}>
                            {selectedImage3 && <Image source={{ uri: selectedImage3 }} style={{ width: 74, height: 74,position:'absolute', zIndex:9999, borderRadius:14 }} />}

                                <TouchableOpacity
                                // style={{height:30, width:30}}
                                activeOpacity={0.5} onPress={pickImage3}>
                                <Image source={require('../../assets/images/chillinq/imgupload.png')} height={30} width={30}/>
                                </TouchableOpacity>

                            {/* <Button title="Pick an image from gallery" onPress={pickImage} /> */}
                            {/* {selectedImage && (
                            <Text style={{ marginTop: 10 }}></Text>
                            )} */}
                        </View>

                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' ,marginBottom:40}}>
                            {selectedImage4 && <Image source={{ uri: selectedImage4 }} style={{ width: 74, height: 74,position:'absolute', zIndex:9999, borderRadius:14 }} />}

                                <TouchableOpacity
                                // style={{height:30, width:30}}
                                activeOpacity={0.5} onPress={pickImage4}>
                                <Image source={require('../../assets/images/chillinq/imgupload.png')} height={30} width={30} />
                                </TouchableOpacity>

                            {/* <Button title="Pick an image from gallery" onPress={pickImage} /> */}
                            {/* {selectedImage && (
                            <Text style={{ marginTop: 10 }}></Text>
                            )} */}
                            </View>

                        </View>







                    <MarginSpacing marginVertical={20}/>
                    
                    <TextField content={"Tell us about yourself"} textColor="#fff" fontSize="21" alignItems={"flex-start"} ml={"12%"} mb={2}/>
                    <TextInput maxLength={100} placeholderTextColor={"#fff"} numberOfLines= {5} onChangeText={onChangeAbout} val={about} multiline={true} style={{
                        padding: 9,
                        height:150,
                        alignSelf: 'center',
                        alignItems:'flex-start',
                        justifyContent: 'center',
                        // backgroundColor: "#413f60",
                        textAlignVertical:'top',
                        borderWidth:0.6,
                        borderRadius:10,
                        borderColor:"#fff",
                        width: '80%',
                        margin: 1,
                        borderRadius: 5,
                        color: '#fff',
                        // fontSize: ktype == "numeric" ? 20 : 16
                        fontSize:18,
                        marginBottom:25
                    }} />


          



                    
                    <View style={{ width: "100%", alignItems: "center"  }}>
                        <LinearGradientButton btnHandler={submit} text="Continue" mt={50} width={"80%"} val={true} bool={true} />
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default Welcome
// export default withExpoSnack(Welcome)