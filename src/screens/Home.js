// @ts-ignore
import React, { useLayoutEffect, useState, useEffect } from 'react'
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View, ScrollView, FlatList, Dimensions } from 'react-native'
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
import axios from 'axios';


const Home = () => {
    const value = AsyncStorage.getItem('enteredNumber')
    const navigation = useNavigation()
    const [activeTint, setActiveTint] = useState('profiles');
    const [displayPotions, setDisplayPotions] = useState(false);
    const [data, setData] = useState();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])
    let obj = [{ name: "Heart Token", img: require(`../../assets/images/heartgroup.png`) }, { name: "Flurt Pass", img: require(`../../assets/images/Flurtpass.png`) }, { name: "Flurt VIP Card", img: require(`../../assets/images/Flurtvip.png`) }, { name: "Flurt Membership Card", img: require(`../../assets/images/flurtmembership.png`) }]




// useEffect(() => {
//     checkQueueStatus();
//   }, []);

const checkQueueStatus = async() =>{
    const value = await AsyncStorage.getItem('enteredNumber')
    const resp = await axios.post('http://localhost:8000/checkQueueStatus', { value: value })
    // console.log(resp.data);
      .then(response => {
        if (response.data.hasQueue) {
            console.log("has");
          alert('You already have a queue!');
        } else {
            console.log("no queue");
          createQueue(value);
        }
      })
      .catch(error => {
        console.error('Error checking queue status:', error);
      });
}

const createQueue = async (value) =>{
    // const value = await AsyncStorage.getItem('enteredNumber')
    try{
    const resp = await axios.post('http://localhostlocalhost:8000/createQueue', { value: value })
    console.log(resp.data)


    navigation.navigate("Trychat")
    }
    
    catch (error) {
        // Handle the error here
        console.error('Error:', error);
    }
}



// FETCH QUEUE DETAILS AND DISPLAY ALL THE QUEUES

const [queueDetails, setQueueDetails] = useState([]);
const [loading, setLoading] = useState(true);
const [visibleQueue, setVisibleQueue] = useState(null);

  useEffect(() => {
    fetchQueueDetails();
  }, []);

  const fetchQueueDetails = async () => {
    try {
      const response = await axios.get('http://localhost:8000/getQueueDetails');
      setQueueDetails(response.data);
    //   console.log(response.data);
    } catch (error) {
      console.error('Error fetching queue details:', error);
      // Handle the error or display an error message to the user.
    } finally {
      setLoading(false);
    }
  };



  const handleJoinButtonClick = () => {
    if (visibleQueue) {
      joinQueue(visibleQueue.maker);

    console.log(visibleQueue.maker);
    }
  };


  const joinQueue = async (value) => {
    try {
        const userNumber = await AsyncStorage.getItem('enteredNumber')
      const response = await axios.post('http://localhost:8000/joinQueue', { value,userNumber });
      // Refresh queue details after successfully joining the queue
      console.log(response.data);
    //   fetchQueueDetails();
    navigation.navigate('Queue', {val:value, makerDetails: visibleQueue.makerDetails})

    } catch (error) {
      console.error('Error joining the queue:', error);
      // Handle the error or display an error message to the user.
    }
  };








    return (
        <ImageBackground style={[{ height: '100%', width: '100%', backgroundColor: "#000" }]} source={require('../../assets/images/plainBackground.png')}>
            
            <View style={{ flex:1, padding: 20, alignItems: 'center' }}>
                <Entypo
                    onPress={() => {
                        navigation.navigate('Menu')
                    }}
                    style={{ position: 'absolute', top: 30, left: 20 }}
                    name='menu'
                    color={"#fff"}
                    size={36}
                />
                <Entypo
                    onPress={() => {
                        // navigation.navigate('CommingSoon', { content: "You can view all your conversations soon!" })
                        navigation.navigate('Chatscreen')
                    }}
                    style={{ position: 'absolute', top: 30, right: 20 }}
                    name='chat'
                    color={"#fff"}
                    size={32}
                />

                <View style={{ flexDirection: 'row', marginTop: scale(50) }}>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('Home', { content: "You will be able to Flurt soon!" })
                        // setActiveTint('flurt')
                    }} style={{
                        borderBottomWidth: activeTint === 'profiles' ? 2 : 0,
                        paddingVertical: moderateScale(15),
                        borderColor: 'red',
                        width: '50%',
                        alignItems: 'center'
                    }}>
                        <Text style={{ color: "#fff" }}>Profiles</Text>
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
                </View>
                

                {/* <View>
                    <Image style={{zindex: '99999', right: scale(300)}}
                    source={require("../../assets/images/pexel1.jpg")}/>
                </View> */}
                {/* <View style={{ justifyContent:'center', alignItems:"center", flexDirection:"row", flexWrap:"wrap", backgroundColor:"#fff", marginTop: scale(50)}}>
                    <Image style={{marginTop: scale(1000)}}
                    source={require("../../assets/images/pexel1.jpg")}/>
                </View> */}

               <ScrollView vertical snapToInterval={(Dimensions.get('window').height)} decelerationRate={0} snapToAlignment={"center"} disableIntervalMomentum={ true } style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height}} onScroll={(event) => {
      const offsetY = event.nativeEvent.contentOffset.y;
      // Calculate the visible queue detail based on the scroll position
      const visibleQueueIndex = Math.floor(offsetY / (Dimensions.get('window').height)); // Adjust to your queue item height
      const queueDetail = queueDetails[visibleQueueIndex];

      // Set the currently visible queue detail
      console.log(queueDetail);
      setVisibleQueue(queueDetail);
    }}>
               
                <Text>Your Queue Details:</Text>
                    {loading ? (
                        <Text>Loading...</Text>
                    ) : (
                        
                        
                        queueDetails.map((item) => (
                            
                        <View key={item._id}>

                            <View style={{ backgroundColor: '#fff'}}>
                            <Image style={{height: Dimensions.get('window').height, width: Dimensions.get('window').width, marginTop:-20, alignItems:'center', marginBottom:10}}
                            // source={require("../../assets/images/profileimg.png")}/>
                            source={{uri:item.makerDetails.firstImage}} onError={(error) => console.error('Image load error:', error)}/>
                            
                            

                            <Text style={{ position: 'absolute', top: 150, left: 5, fontSize:20, color:'#fff'}}>Queue ID: {item._id}</Text>
                            <Text style={{ position: 'absolute', top: 300, left: 5, fontSize:20, color:'#fff'}}>uri {item.makerDetails.firstImage}</Text>
                            <View style={{zIndex:999, position:"absolute"}}>
                                <Image style={{height:50, width:50,top:500}} source={require("../../assets/images/verify.png")} />
                            </View>
                            <Text style={{ position: 'absolute', top: 200, left: 5, fontSize:20, color:'#fff'}}>Makerr: {item.makerDetails ? item.makerDetails.gender : 'N/A'}</Text>
                            </View>
                            {/* Add other queue details as needed */}
                        </View>
                        ))
                    )}

                </ScrollView>
           
              




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
                    // onPress={() => { navigation.navigate('CommingSoon', { content: "You can create your own queue soon!" }) }}
                    onPress={handleJoinButtonClick}
                >
                    <Image
                        source={require("../../assets/images/addShape.png")}
                        style={{ height: "100%", width: "100%" }}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={checkQueueStatus} style={styles.btn}>
                    <CommonBtn name="CREATE QUEUE" />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { navigation.navigate('Queue') }} style={styles.btn}>
                    <CommonBtn name="EARNED REWARDS" />
                </TouchableOpacity>
            </LinearGradient>
        </ImageBackground >
    )
}

export default Home;
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