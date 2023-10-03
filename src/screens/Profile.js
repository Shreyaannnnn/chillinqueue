// @ts-ignore
import React, { useLayoutEffect, useState, useEffect } from 'react'
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native'
// import { white } from '../../style/GlobalVariable'
// import ExploreNetwork from '../../components/ExploreNft/ExploreNetwork'
// import ExploreMarketPlace from '../../components/ExploreNft/ExploreMarketPlace'
// import LegacyPotions from '../../components/LegacyPotions'
// import NavigationUtils, { ENavigationPath } from "../../utils/NavigationUtils";
import { LinearGradient } from 'expo-linear-gradient'
import { moderateScale, scale } from 'react-native-size-matters'
// import Icon from 'react-native-vector-icons/Entypo';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native'
import CommonBtn from '../components/CommonBtn'
import AsyncStorage from '@react-native-async-storage/async-storage'
import LinearGradientButton from '../components/LinearGradientButton'
import MarginSpacing from '../components/MarginSpacing'
import axios from 'axios';





const Profile =() => {


    
    const navigation = useNavigation()
    const [activeTint, setActiveTint] = useState('marketplace');
    const [displayPotions, setDisplayPotions] = useState(false);
    const [data, setData] = useState();
    const [number,setNumber] = useState(0);
    

    // useEffect((number) => {
    //     (async () =>{
    //     // const getData = async () => {
    //         console.log('hi');
    //         const value = await AsyncStorage.getItem('enteredNumber');
    //     //   const json = await resp.json()
    //         setNumber(value)
    //     //   updateData(json);
    //         console.log(await AsyncStorage.getItem('enteredNumber'))
    //         console.log(value);
    //         console.log(number);
    //     // }
    //     // getData();
    //     })
    //   });


    useEffect(() => {
        (async () => {
          const value = await AsyncStorage.getItem('enteredNumber');
          setNumber(value);
          const data = await axios.post('http://localhost:8000/profile', {val : value})
          console.log(data.data)
        })();
      
        return () => {
          // this now gets called when the component unmounts
        };
      }, []);





    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])
    let obj = [{ name: "Heart Token", img: require(`../../assets/images/heartgroup.png`) }, { name: "Flurt Pass", img: require(`../../assets/images/Flurtpass.png`) }, { name: "Flurt VIP Card", img: require(`../../assets/images/Flurtvip.png`) }, { name: "Flurt Membership Card", img: require(`../../assets/images/flurtmembership.png`) }]

    return (
        <ImageBackground style={[{ height: '100%', width: '100%', backgroundColor: "#000" }]} source={require('../../assets/images/plainBackground.png')}>

            <View style={{ flex:1,padding: 20,  alignItems: 'center', flexDirection:"column"}}>
                <Entypo
                    onPress={ () => {
                        navigation.navigate('Menu')
                    }}
                    style={{ position: 'absolute', top: 30, left: 20 }}
                    name='menu'
                    color={"#fff"}
                    size={36}
                />
                <Text style={{position: 'absolute', top: 50,  fontSize:20, color:'#fff', textAlign:"center"}}>My Profile</Text>
                
                
                <View style={{ top:80}}>
                    <Image style={{height: "78%", width: Dimensions.get('window').width, display:"flex",alignSelf:"center"}}
                    source={require("../../assets/images/profileimg.png")}/>
                    <Text style={{position:"absolute"}}>
                        helloooo
                    </Text>
                </View>
                <MarginSpacing marginVertical={"0%"} />
                <LinearGradientButton text="Refund Status" width={"80%"} val={"true"} bool={true} style={{position:"absolute",flex:1,  flexDirection:"column"}} />
                


                <Text style={{ position: 'absolute', top: 150, left: 50, fontSize:20, color:'#fff'}}>{number}</Text>
                <Entypo
                    onPress={() => {
                        navigation.navigate('CommingSoon', { content: "You can view all your conversations soon!" })
                    }}
                    style={{ position: 'absolute', top: 30, right: 20 }}
                    name='chat'
                    color={"#fff"}
                    size={32}
                />

                {/* <View style={{ flexDirection: 'row', marginTop: scale(50) }}>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('CommingSoon', { content: "You will be able to Flurt soon!" })
                        // setActiveTint('flurt')
                    }} style={{
                        borderBottomWidth: activeTint === 'flurt' ? 2 : 0,
                        paddingVertical: moderateScale(15),
                        borderColor: 'red',
                        width: '50%',
                        alignItems: 'center'
                    }}>
                        <Text style={{ color: "#fff" }}>Flurt</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                        setActiveTint('marketplace')
                    }} style={{
                        borderBottomWidth: activeTint === 'marketplace' ? 2 : 0,
                        paddingVertical: moderateScale(15),
                        borderColor: 'red',
                        width: '50%',
                        alignItems: 'center'
                    }}>
                        <Text style={{ color: "#fff" }}>Explore MarketPlace</Text>
                    </TouchableOpacity>
                </View> */}






                {/*<Text style={{ color: "#fff", fontSize: 20, flex: 1, fontWeight: 'bold' }}>Explore Flurt Marketplace</Text>*/}
                {/*<Entypo*/}
                {/*    style={{*/}
                {/*        color: Colors.white,*/}
                {/*        marginRight: 0,*/}
                {/*        backgroundColor: Colors.black,*/}
                {/*        padding: 5,*/}
                {/*        borderRadius: 5*/}
                {/*    }}*/}
                {/*    name='user'*/}
                {/*    color={Colors.white}*/}
                {/*    onPress={() => {*/}
                {/*        NavigationUtils.reset(ENavigationPath.Explore);*/}
                {/*    }}*/}
                {/*    size={20}*/}
                {/*/>*/}
            </View>
            <View style={{ width: '90%', alignSelf: 'center' }}>
                {/* {true && <ExploreNetwork />} */}
                {/* {activeTint == 'flurt' && <ExploreNetwork />}
                {activeTint == 'marketplace' &&
                    <ExploreMarketPlace setDisplayPotions={setDisplayPotions} displayPotions={displayPotions} obj={obj} setData={setData} />}
                {activeTint == 'marketplace' && displayPotions && <LegacyPotions setDisplayPotions={setDisplayPotions} data={data} />} */}

            </View>
            {/* navigation button here */}
            <LinearGradient
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 1 }}
                colors={["#242752", "#33214b"]}
                style={styles.background}>

                <TouchableOpacity
                    activeOpacity={0.8}
                    style={[styles.chatbtn, { left: scale(120) }]}
                    onPress={() => { navigation.navigate('CommingSoon', { content: "You can create your own queue soon!" }) }}
                >
                    <Image
                        source={require("../../assets/images/addShape.png")}
                        style={{ height: "100%", width: "100%" }}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { navigation.navigate('CommingSoon', { content: "You wil be able to join queues soon!" }) }} style={styles.btn}>
                    <CommonBtn name="JOINED QUEUES" />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { navigation.navigate('CommingSoon', { content: "Discover easy ways to earn rewards soon!" }) }} style={styles.btn}>
                    <CommonBtn name="EARNED REWARDS" />
                </TouchableOpacity>
            </LinearGradient>
        </ImageBackground >
    )
}

export default Profile;
const styles = StyleSheet.create({
    background: {
        width: "100%",
        height: moderateScale(65),
        borderTopRightRadius: moderateScale(40),
        borderTopLeftRadius: moderateScale(40),
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: moderateScale(10),
        alignItems: "center",
        position: "absolute",
        bottom: 0
    },
    container: {
        flex: 1,
        backgroundColor: "#2d1335",
    },
    btn: {
        paddingHorizontal: scale(10),
        // backgroundColor: "red",
        // padding: 20
    },
    chatbtn: {

        height: moderateScale(100),
        width: scale(100),
        position: "absolute",
        bottom: moderateScale(2),
        zIndex: 999,
        alignSelf: "center",

    }
});