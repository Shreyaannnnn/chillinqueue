import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
const image1 = 'https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm328-366-tong-08_1.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=6a37204762fdd64612ec2ca289977b5e'
const Myqueue = () => {

  










  return (
    <View  className=" bg-red-400" >
        <View className="flex m-7 justify-between items-center flex-row" >
          <View className="flex items-center flex-row" >
            <Entypo name="menu" size={24} color="black" />
            <View className="w-24 h-7 flex flex-row mr-2 items-center justify-center bg-zinc-300 bg-opacity-30 rounded-3xl">
              <Ionicons  name="wallet-outline" size={24} color="black" />
              <Text className="font-extrabold" >10 </Text>
              <Text >$Chill</Text>
            </View>
          </View>
          <View className="flex w-14 rounded-3xl justify-between  flex-row" > 
            <FontAwesome className="pr-2" name="bell-o" size={24} color="black" />
            <AntDesign name="message1" size={24} color="black" />
          </View>
        </View>
        <View className="flex items-center justify-between flex-row" >
          <View className="pl-12" > 
            <Text className="text-center  text-sm font-bold leading-tight" >John's Q</Text>
          </View>
          <View className="w-6 h-px origin-top-left -rotate-90 border border-black" ></View>
          <View className=" pr-12" >  
            <Text className="text-center  text-sm font-bold leading-tight" >Joined  Q’s</Text>
          </View>
        </View>
        <View className="w-[189px] z h-px border-2 border-pink-600" ></View>
        <View className="mx-7 flex space-y-3" >
          <View className=" h-28 flex flex-row items-center justify-evenly   bg-white opacity-25 rounded-lg">
            <Image 
              className="w-20 h-20 rounded-full border"
              source={{uri:image1}}
            />
            <View>
              <View className="flex flex-row items-center" >
                <Text className="text-pink-600 text-lg font-bold capitalize" >JOHN DOE</Text>
                <Text className="text-slate-500 text-xs font-semibold capitalize ml-4 leading-none" >26 Yrs,Delhi</Text>
              </View>
              <Text className="text-white text-xs font-medium capitalize leading-none" > “New in the Town, Looking for New {"\n"} Friends” </Text>
              <View className="flex flex-row w-14 justify-between items-center" > 
                <View className="flex flex-row items-center" >
                  <AntDesign name="staro" size={24} color="black" />
                  <Text className="text-white text-xs font-semibold capitalize leading-3" >Tier-3</Text>
                </View>
                
                <View className="w-3 h-px origin-top-left rotate-90 border border-white border-opacity-30" ></View>
                <View className="flex  flex-row items-center " >
                  <Ionicons name="person" size={24} color="black" />
                  <Text className="text-white text-xs font-semibold capitalize leading-3" >300</Text>
                </View>
                
              </View>
            </View>

            <Entypo name="cross" size={24} color="black" />
            
          </View>

          <View className=" h-22 flex flex-row items-center justify-evenly  rounded-lg">
            <Image 
              className="w-20 h-20 rounded-full border"
              source={{uri:image1}}
            />
            <View>
              <View className="flex flex-row items-center" >
                <Text className="text-pink-600 text-lg font-bold capitalize" >JOHN DOE</Text>
                <Text className="text-slate-500 text-xs font-semibold capitalize ml-4 leading-none" >26 Yrs,Delhi</Text>
              </View>
              <Text className="text-white text-xs font-medium capitalize leading-none" > “New in the Town, Looking for New {"\n"} Friends” </Text>
              
            </View>

            <View className="w-2.5 h-2.5 bg-lime-600 rounded-full" ></View>
            
          </View>

          <View className=" h-28 flex flex-row items-center justify-evenly   bg-white opacity-25 rounded-lg">
            <Image 
              className="w-20 h-20 rounded-full border"
              source={{uri:image1}}
            />
            <View>
              <View className="flex flex-row items-center" >
                <Text className="text-pink-600 text-lg font-bold capitalize" >JOHN DOE</Text>
                <Text className="text-slate-500 text-xs font-semibold capitalize ml-4 leading-none" >26 Yrs,Delhi</Text>
              </View>
              <Text className="text-white text-xs font-medium capitalize leading-none" > “New in the Town, Looking for New {"\n"} Friends” </Text>
              
            </View>

            <View className="w-2.5 h-2.5 bg-red-800 rounded-full" ></View>
            
          </View>

          <View className=" h-22 flex flex-row items-center justify-evenly rounded-lg">
            <Image 
              className="w-20 h-20 rounded-full border"
              source={{uri:image1}}
            />
            <View>
              <View className="flex flex-row items-center" >
                <Text className="text-pink-600 text-lg font-bold capitalize" >JOHN DOE</Text>
                <Text className="text-slate-500 text-xs font-semibold capitalize ml-4 leading-none" >26 Yrs,Delhi</Text>
              </View>
              <Text className="text-white text-xs font-medium capitalize leading-none" > “New in the Town, Looking for New {"\n"} Friends” </Text>
              
            </View>

            <View className="w-2.5 h-2.5 bg-lime-600 rounded-full" ></View>
            
          </View>

          <View className=" h-20 flex flex-row items-center justify-evenly   bg-white opacity-25 rounded-lg">
            <Image 
              className="w-20 h-20 rounded-full border"
              source={{uri:image1}}
            />
            <View>
              <View className="flex flex-row items-center" >
                <Text className="text-pink-600 text-lg font-bold capitalize" >JOHN DOE</Text>
                <Text className="text-slate-500 text-xs font-semibold capitalize ml-4 leading-none" >26 Yrs,Delhi</Text>
              </View>
              <Text className="text-white text-xs font-medium capitalize leading-none" > “New in the Town, Looking for New {"\n"} Friends” </Text>
              
            </View>

            <View className="w-2.5 h-2.5 bg-lime-600 rounded-full" ></View>
            
          </View>

          <View className=" h-20 flex flex-row items-center justify-evenly  rounded-lg">
            <Image 
              className="w-20 h-20 rounded-full border"
              source={{uri:image1}}
            />
            <View>
              <View className="flex flex-row items-center" >
                <Text className="text-pink-600 text-lg font-bold capitalize" >JOHN DOE</Text>
                <Text className="text-slate-500 text-xs font-semibold capitalize ml-4 leading-none" >26 Yrs,Delhi</Text>
              </View>
              <Text className="text-white text-xs font-medium capitalize leading-none" > “New in the Town, Looking for New {"\n"} Friends” </Text>
              
            </View>

            <View className="w-2.5 h-2.5 bg-lime-600 rounded-full" ></View>
            
          </View>

          <View className=" h-20 flex flex-row items-center justify-evenly  rounded-lg">
            <Image 
              className="w-20 h-20 rounded-full border"
              source={{uri:image1}}
            />
            <View>
              <View className="flex flex-row items-center" >
                <Text className="text-pink-600 text-lg font-bold capitalize" >JOHN DOE</Text>
                <Text className="text-slate-500 text-xs font-semibold capitalize ml-4 leading-none" >26 Yrs,Delhi</Text>
              </View>
              <Text className="text-white text-xs font-medium capitalize leading-none" > “New in the Town, Looking for New {"\n"} Friends” </Text>
              
            </View>

            <View className="w-2.5 h-2.5 bg-lime-600 rounded-full" ></View>
            
          </View>
          
        </View>
        <View className="w-[100%] mt-2 flex flex-row items-center justify-center  h-16 bg-green-400 rounded-tl-full rounded-tr-full shadow" >
            <Text className="text-center text-white mx-auto text-base font-semibold leading-tight" >Create Q's</Text>
            <Text className="text-center text-white mx-auto text-base font-semibold leading-tight" >Rewards</Text>
        </View>
    </View>
  );
}
export default Myqueue;