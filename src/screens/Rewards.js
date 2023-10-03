import { StatusBar } from 'expo-status-bar';
import { Image, ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo';
import {scale , moderateScale} from 'react-native-size-matters'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { BlurView } from 'expo-blur';
import { Dimensions } from 'react-native'
const {height} = Dimensions.get('window');
const navigationBarHeight = height - Dimensions.get('screen').height;

const Rewards = () => {
  return (
    <SafeAreaView >
      <ImageBackground style={{ width: "100%", height: "102%"  }} source={require('../../assets/images/images/plainBackground.png')}>
        <View style={{padding: 20  , paddingTop: 30 }} >
                  <View style={{flexDirection: "row" , alignItems: "center" , position: 'relative' , justifyContent: "space-between"}} >  
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
                  <View style={{ flexDirection: 'row', alignItems: "center" , justifyContent: "space-evenly" ,  marginTop: scale(10) }}>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('CommingSoon', { content: "You will be able to Flurt soon!" })
                    }} style={{
                        paddingVertical: moderateScale(15),
                        borderColor: 'red',
                        width: '50%',
                        alignItems: 'center'
                    }}>
                        <Text style={{ color: "#fff" , fontWeight: "bold" }}>Profile</Text>
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
                        <Text style={{ color: "#fff" , fontWeight: "bold" }}>MarketPlace</Text>
                    </TouchableOpacity>
                </View>
                <View style={{alignItems: "center"  , padding: 20 , justifyContent:"space-evenly"}} >
                  <TouchableOpacity style={styles.container} >
                  <BlurView intensity={100}  style={{height:'100%' , alignItems:'center' , justifyContent: 'center'}}  >
                    <View style={{alignItems:'center' , justifyContent:'center'}} > 
                          <Image
                              source={require('../../assets/images/images/AD.png')}
                          />
                        <Text style={styles.text} >
                            Watch Ads
                        </Text>
                    </View>
                  </BlurView>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.container} >
                  <BlurView intensity={100} style={{height:'100%' , alignItems:'center' , justifyContent: 'center'}} >
                    <View style={{alignItems:'center' , justifyContent:'center'}} >
                          <Ionicons
                            onPress={()=> {}}
                            // style={{ position: 'absolute', top: 30, right: 20 }}
                            name='checkmark-circle-outline'
                            color={"#fff"}
                            size={80}
                          />
              
                        <Text style={styles.text} >
                            Verify Profile
                        </Text>
                    </View>
                  </BlurView>
                  </TouchableOpacity>
                  <TouchableOpacity style={{width: '100%', height: '25%', margin:10 ,  position: 'relative',backgroundColor: 'transparent',  borderRadius: 6,borderWidth: 0.75,borderColor: '#D2366A',overflow: 'hidden', }} >
                    <BlurView intensity={100} style={{height:'100%' , alignItems:'center' , justifyContent: 'center'}} >
                      <View style={{alignItems:'center' , justifyContent:'center'}} >
                          <Image source={require('../../assets/images/images/vote.png')} />
                          <Text style={styles.text} > 
                              Vote
                          </Text>
                      </View>
                    </BlurView>
                  </TouchableOpacity>   
                </View>                              
        </View>
        <View >

                  <View style={{position: 'relative' , marginBottom: navigationBarHeight}} >
                  <View style={ { flexDirection:'row'  , marginTop: 18 , justifyContent:'center' , alignItems:'center'}} >
                    <View style={{position:'absolute' , bottom: 0.1  , width: "100.3%" }} >
                       <Image  source={require('../../assets/images/images/bottombar.png')} /> 
                    </View>
                  </View>

                  <View style={{position:'absolute'}} >  
                    <Image style={{bottom: 100 , left: 150}} source={require('../../assets/images/images/heart.png')} />
                  </View>

                  <View style={{flexDirection: 'row' , position: 'absolute'}} >
                      <Text style={{color: 'white' , fontWeight: '600' , bottom:30 , left: 80}} >Create Q’s</Text>
                      <View style={{bottom: 30 , left: 190 , flexDirection: 'row'}} >
                        <Text style={{color: 'white' }} >Rewards</Text>
                        <Image source={require('../../assets/images/images/coin.png')} />
                      </View>
                      <View style={[styles4.container , {position: 'absolute' , left: 210  }]}></View>
                  </View>
                  </View>
               
        </View>  
      </ImageBackground>    
    </SafeAreaView>
  );
}


export default Rewards;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '25%',
    position: 'relative',
    margin: 10,
    backgroundColor: 'transparent', // Linear gradient will provide the background
    borderRadius: 6,
    borderWidth: 0.75,
    borderColor: '#D2366A',
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


const styles4 = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 2,
    borderColor: '#D2366A',
    width: '100%',
    height: '10%',
  },
});