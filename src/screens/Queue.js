import { StatusBar } from 'expo-status-bar';
import { Image, ImageBackground, SafeAreaView, Pressable , ScrollView, ScrollViewBase, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo';
import React, { useLayoutEffect, useState, useEffect } from 'react'
import {scale , moderateScale} from 'react-native-size-matters'
import { BlurView } from 'expo-blur';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Dimensions } from 'react-native'
import Bottom from '../components/Bottom';
import axios from 'axios';
// import Mid from './components/Mid';
const {height} = Dimensions.get('window');
const navigationBarHeight = height - Dimensions.get('screen').height;
export default function Queue({ route }) {




  const [queueDetails, setQueueDetails] = useState([]);
  const [maker, setMaker] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetchQueue();
  }, []);
  

  const fetchQueue = async () => {
    try {
    //   const response = await axios.get('http://192.168.29.6:8000/getQueueDetails');
      
      // const response = await axios.get('http://192.168.1.40:8000/getQueue',{value});
      const value = await route.params?.val
      const makerDeets = await route.params?.makerDetails
      setMaker(makerDeets);
      setLoading(false)

      console.log(maker);
      
      response = await axios.post('http://localhost:8000/getQueue', {value});
      setQueueDetails(response.data);

      console.log(response.data);
    } catch (error) {
      console.error('Error fetching queue details:', error);
      // Handle the error or display an error message to the user.
    } 
    // finally {
    //   setLoading(false);
    // }
  };



  return (
    <SafeAreaView>
          <ImageBackground style={{ width: "100%", height: "102%"  }} source={require('../../assets/images/images/plainBackground.png')}>
            <View style={{justifyContent:'space-between' , height:'95%'}} >
              <View style={{  paddingBottom: 0 , paddingTop: 30}} >
                <View style={{flexDirection: "row" , paddingHorizontal: 20 ,  alignItems: "center" , position: 'relative' , justifyContent: "space-between"}} >  
                          <Entypo
                              onPress={() => {}}
                              name='menu'
                              color={"#fff"}
                              size={36}
                          />
                          <TouchableOpacity style={styles2.container}>
                              <Image style={{marginRight: 4}} source={require('../../assets/images/images/wallet.png')} />
                              <Text style={{color: 'white' , fontWeight:'900' , }}>10</Text>
                              <Text style={{color: 'white' , fontWeight:'300' , }} > $CHILL</Text>
                          </TouchableOpacity>
                    <View style={{flexDirection: 'row' , alignItems: "center"}} >
                      <Ionicons
                        onPress={() => {}}
                        // style={{ position: 'absolute', top: 30, right: 20 }}
                        name='notifications-outline'
                        color={"#fff"}
                        size={32}
                      />
                      <View style={{marginLeft: 3}} >
                        <Ionicons
                          onPress={()=> {}}
                          // style={{ position: 'absolute', top: 30, right: 20 }}
                          name='chatbubbles-outline'
                          color={"#fff"}
                          size={32}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={{ flexDirection: 'row', paddingHorizontal:20 , alignItems: "center" , justifyContent: "space-evenly" ,  marginTop: scale(10) }}>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('CommingSoon', { content: "You will be able to Flurt soon!" })
                    }} style={{
                        paddingVertical: moderateScale(15),
                        borderColor: 'red',
                        width: '50%',
                        alignItems: 'center'
                    }}>
                        <Text style={{ color: "#fff" , fontWeight: "bold" }}>John's Q</Text>
                    </TouchableOpacity>
                      <View style={styles3.container} >
                      </View>
                    <TouchableOpacity onPress={() => {
                    }} style={{
                        paddingVertical: moderateScale(15),
                        borderColor: 'red',
                        width: '50%',
                        alignItems: 'center'
                    }}>
                        <Text style={{ color: "#fff" , fontWeight: "bold" }}>Joined Q's</Text>
                    </TouchableOpacity>          
                </View> 

                <View style={styles4.container }></View>                
              </View>

            <ScrollView contentContainerStyle={{width: '100%' , marginLeft: 20 , justifyContent:'space-evenly'  }} >
                    
            {loading ? (
                        <Text>Loading...</Text>
                    ) : (
               
                    <View style={{height:"35%" , width:"100%"}} >
                      <TouchableOpacity
                      style={ styles.container }
                      >
                          <View style={{flexDirection:"row" , height:"100%" , flexDirection:'row' , borderRadius: 10 ,  alignItems:'center'}} >
                            <View style={{marginLeft: 10}} ><Image borderRadius={50} height={80} width={80} source={{uri: maker.firstImage}} /></View>
                            {/* <View style={{marginLeft: 10}} ><Image borderRadius={50} height={80} width={80} source={require('../../assets/images/images/cross.png')} /></View> */}
                            <View style={{justifyContent: 'space-between' , marginLeft: 10}}  >  
                              <View style={{flexDirection:"row" , alignItems:'center'  }} >
                                <Text style={{color: '#D2366A' , fontWeight: '500' , fontSize: 21}} >{maker.name}</Text>
                                <Text style={{color: '#7B77A5' , marginLeft: 10 }} >26 yrs, Delhi</Text>
                                <Image style={{marginLeft: 40}} source={require('../../assets/images/images/cross.png')} />
                              </View>
                              
                              <View style={{width: '90%'}} >
                              <Text  style={{color: 'white' , fontSize: 12}} >{/*maker.bio*/} hm</Text>
                              <View style={{flexDirection:'row', alignItems: 'center' }} >
                                <View style={{flexDirection:'row' , alignItems: 'center'}}  >
                                  <Image source={require('../../assets/images/images/star.png')} />
                                  
                                  <Text style={{marginLeft: 5 , color: 'white'}} >Tier 3</Text>
                                </View>

                                <View style={[styles5.container , {marginLeft: 10 , marginRight: 10}]}></View>

                                <View style={{flexDirection:'row' , }} >
                                  <Image  source={require('../../assets/images/images/persontick.png')} />
                                  <Pressable><Text style={{color: 'white' , fontWeight:'500'}} >300</Text></Pressable>
                                </View>
                                
                              </View>
                              </View>
                            </View>   
                          </View>
                      </TouchableOpacity>
                    </View>
                    )}

                    {queueDetails.map((item) => (

                    <View style={{height:"35%" , width:"100%" , }} key={item._id} >
                      <TouchableOpacity
                      style={ styles.container }
                      >
                          <View style={{flexDirection:"row" , height:'100%' , flexDirection:'row' , borderRadius:10, alignItems:'center'}} >
                            {/* <View style={{marginLeft: 10}} ><Image  source={require('../../assets/images/images/Image-60.png')} /></View> */}
                            <View style={{marginLeft: 10}} ><Image borderRadius={50} height={75} width={75} source={{uri : item.firstImage}} onError={(error) => console.error('Image load error:', error)} /></View>
                            {/* <View style={{marginLeft: 10}} ><Image  source={{uri : item.firstImage}} onError={(error) => console.error('Image load error:', error)} /></View> */}
                            <View style={{justifyContent: 'space-between' , marginLeft: 10}}  >  
                              <View style={{flexDirection:"row" , alignItems:'center'  }} >
                                <Text style={{color: 'white' , fontWeight: '400' , fontSize: 20}} >{item.name}, 26yrs</Text>
                                <Image style={{marginLeft: 220, position:"absolute"}} source={require('../../assets/images/images/green.png')} />
                              </View>
                              
                              <View style={{width: '90%'}} >
                              <Text  style={{color: 'white' , fontSize: 13}} >Lawyer</Text>
                           
                              </View>
                            </View>   
                          </View>
                      </TouchableOpacity>
                    </View>
                    ))
                    }



                </ScrollView>          
                <View>
                      <Bottom/>
                </View>
          </View>
          </ImageBackground>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    marginVertical:20,
    position: 'relative',
    backgroundColor: 'transparent', // Linear gradient will provide the background
    borderRadius: 6,
    // borderWidth: 0.75,
    // borderColor: '#D2366A',
    overflow: 'hidden', // To hide the shadow overflow
  },
  linearGradient: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  shadow: {
    shadowColor: 'rgba(83.94, 83.94, 83.94, 0.21)',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowRadius: 16,
    shadowOpacity: 1,
  },
  backdrop: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'absolute',
    backdropFilter: 'blur(10px)',
  },
  text: {
    color: 'white',
    fontSize: 20,
    // fontFamily: 'Poppins',
    fontWeight: '500',
    textTransform: 'capitalize',
    marginTop: 4,
    lineHeight: 24.8,
  },
});

const styles2 = StyleSheet.create({
  container: {
    width: '30%',
    height: '100%',
    backgroundColor: 'rgba(217, 217, 217, 0.30)',
    borderRadius: 40,
    marginRight: 130,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'center'
  },
});

const styles4 = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: '#D2366A',
    width: '50%',
  },
});

const styles3 = StyleSheet.create({
  container: {
    width: '10%',
    backgroundColor:'white',
    // height: '100%',
    transform: [{ rotate: '-90deg' }], // Rotate -90 degrees
    transformOrigin: '0 0', // Set the transform origin to the top-left corner
    borderWidth: 0.5, // Border width
    borderColor: 'white', // Border color
    borderStyle: 'solid', // Border style (optional, default is 'solid')
  },
});


const styles5 = StyleSheet.create({
  container: {
    
    
    height: '100%',
    backgroundColor: 'white',
    // transform: [{ rotate: '90deg' }], // Rotate 90 degrees
    transformOrigin: '0 0', // Set the transform origin to the top-left corner
    borderWidth: 0.25,
    borderColor: 'rgba(255, 255, 255, 0.30)',
  },
});