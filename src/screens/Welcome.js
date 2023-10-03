import { View, Text, SafeAreaView, ImageBackground, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
// import { styled, withExpoSnack } from 'nativewind';
import TextField from '../components/TextField';
import LinearGradientButton from '../components/LinearGradientButton';
// const StyledView = styled(View);
// const StyledText = styled(Text);
import AntDesign from '@expo/vector-icons/AntDesign';
const Welcome = () => {
    const navigation = useNavigation()
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    })
    return (
        <SafeAreaView>
            <ImageBackground style={{ width: "100%", height: "100%" }} source={require('../../assets/images/plainBackground.png')}>
                <AntDesign onPress={() => { navigation.goBack() }} style={{ zIndex: 999, position: 'absolute', top: 60, left: 20 }} name='arrowleft' color={"#fff"} size={30} />
                <View style={{ flex: 1, marginVertical: 100, alignItems: "center" }}>
                    <View style={{ marginTop: 100, marginBottom: 50 }} >
                        <Image source={require('../../assets/images/chillinq/tick.png')} />
                    </View>
                    <View style={{ marginBottom: 50 }}>
                        <TextField content={"WELCOME TO"} textColor="#fff" fontWeight="bold" fontSize="40" />
                        <TextField content={"CHILLINQ"} textColor="#e7487f" fontWeight="bold" fontSize="40" textAlign={"center"} />
                        <View style={{ marginTop: 40 }} >
                            <TextField content={"Become a"} textColor="#fff" fontSize="22" textAlign={"center"} fontWeight='bold' />
                            <TextField content={"#SerialChiller"} textColor="#fff" fontSize="22" textAlign={"center"} fontWeight='bold' />
                            {/* <Text style={{ color: '#fff', fontSize: 15, textAlign: 'center', }}>Join the flurt Network with</Text> */}
                        </View>
                    </View>
                    <View style={{ width: "100%" }}>
                        <LinearGradientButton btnHandler={() => {
                            //  navigation.navigate('CommingSoon', { content: "You can view all your conversations soon!" })
                            navigation.navigate('Menu')
                        }} text="Continue" mt={50} width={"80%"} val={true} bool={true} />
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default Welcome
// export default withExpoSnack(Welcome)