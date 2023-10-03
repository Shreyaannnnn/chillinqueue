import { View, Text, SafeAreaView, ImageBackground, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import TextField from '../components/TextField';
import { scale } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';

const Menu = () => {
    const navigation = useNavigation()
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])
    return (
        <SafeAreaView>
            <ImageBackground style={{ width: "100%", height: "100%", backgroundColor: "#000" }} source={require('../../assets/images/plainBackground.png')}>
                <Entypo
                    // onPress={() => { navigation.toggleDrawer() }}
                    onPress={() => { navigation.goBack() }}
                    // style={{ position: 'absolute', top: scale(50), left: 20, color: 'white', zIndex: 999 }}
                    style={{ position: 'absolute', top: 40, left: 20, zIndex: 9999 }}
                    name='menu'
                    color={"white"}
                    size={36}
                />
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center", }}>
                    <TouchableOpacity onPress={() => { navigation.navigate("Home") }} style={{ padding: scale(12), borderBottomWidth: 0.5, borderBottomColor: "#685071", width: "70%", flexDirection: "row" }}>
                        <Entypo disabled style={{ color: 'white', marginRight: scale(10) }} name='home' color={"white"} size={20} />
                        <TextField content='Home' fontSize='16' textColor='#fff' fontWeight={"bold"} />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => { navigation.navigate('Profile') }} style={{ padding: scale(12), borderBottomColor: "#615156", borderBottomWidth: 0.5, width: "70%", flexDirection: "row" }}>
                        <Entypo style={{ color: 'white', marginRight: scale(10) }} name='user' color={"white"} size={20} />
                        <TextField content='My Profile' fontSize='16' textColor='#fff' fontWeight={"bold"} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.navigate("CommingSoon", { content: "You can view all your conversations soon!" }) }} style={{ padding: scale(12), borderBottomColor: "#615156", borderBottomWidth: 0.5, width: "70%", flexDirection: "row" }}>
                        <Entypo style={{ color: 'white', marginRight: scale(10) }} name='wallet' color={"white"} size={20} />
                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "90%" }}>
                            <TextField content='Wallet' fontSize='16' textColor='#fff' fontWeight={"bold"} />
                            <TextField content='Comming Soon!' fontSize='12' textColor='#d2366a' />
                        </View>
                    </TouchableOpacity>
                    {/* <View style={{ padding: scale(12), borderBottomColor: "#685071", borderBottomWidth: 0.5, width: "70%", flexDirection: "row" }}>
                        <AntDesign style={{ color: 'white', marginRight: scale(10) }} name='setting' color={"white"} size={20} />
                        <TextField content='Settings' fontSize='16' textColor='#fff' />
                    </View> */}
                    <TouchableOpacity onPress={() => { navigation.navigate("CommingSoon", { content: "You can view all your blogs soon!" }) }} style={{ padding: scale(12), borderBottomColor: "#615156", borderBottomWidth: 0.5, width: "70%", flexDirection: "row" }}>
                        <Entypo style={{ color: 'white', marginRight: scale(10) }} name='home' color={"white"} size={20} />
                        <TextField content='Blogs' fontSize='16' textColor='#fff' fontWeight={"bold"} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.navigate("CommingSoon", { content: "You can view announcements soon!" }) }} style={{ padding: scale(12), borderBottomColor: "#615156", borderBottomWidth: 0.5, width: "70%", flexDirection: "row" }}>
                        <Entypo style={{ color: 'white', marginRight: scale(10) }} name='home' color={"white"} size={20} />
                        <TextField content='Annoucements' fontSize='16' textColor='#fff' fontWeight={"bold"} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.navigate("CommingSoon", { content: "You can view Privacy Policy soon!" }) }} style={{ padding: scale(12), borderBottomColor: "#685071", borderBottomWidth: 0.5, width: "70%", flexDirection: "row" }}>
                        <Entypo style={{ color: 'white', marginRight: scale(10) }} name='home' color={"white"} size={20} />
                        <TextField content='Privacy Terms' fontSize='16' textColor='#fff' fontWeight={"bold"} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.navigate("CommingSoon", { content: "You can view Terms And Conditions soon!" }) }} style={{ padding: scale(12), borderBottomColor: "#685071", borderBottomWidth: 0.5, width: "70%", flexDirection: "row" }}>
                        <MaterialIcons style={{ color: 'white', marginRight: scale(10) }} name='privacy-tip' color={"white"} size={20} />
                        <TextField content='Terms And Conditions' fontSize='16' textColor='#fff' fontWeight={"bold"} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.navigate("CommingSoon", { content: "" }) }} style={{ padding: scale(12), width: "70%", flexDirection: "row" }}>
                        <AntDesign style={{ color: 'white', marginRight: scale(10) }} name='poweroff' color={"white"} size={20} />
                        <TextField content='Logout' fontSize='16' textColor='#fff' fontWeight={"bold"} />
                    </TouchableOpacity>


                </View>
            </ImageBackground>
        </SafeAreaView>

    )
}

export default Menu;
