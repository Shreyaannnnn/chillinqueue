import { StatusBar } from 'expo-status-bar';
import { Image, ImageBackground, SafeAreaView, Pressable , ScrollView, ScrollViewBase, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Dimensions } from 'react-native'

const {height} = Dimensions.get('window');
const navigationBarHeight = height - Dimensions.get('screen').height;


export default function Bottom () {
    return (
        <View style={{   marginBottom: navigationBarHeight}}  >
                  <View style={{position: 'relative' }} >
                  <View style={ { flexDirection:'row'  , marginTop: 18 }} >
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
                  </View>
                  </View>
               
        </View>
    )
}