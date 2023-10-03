import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { moderateScale, scale } from 'react-native-size-matters';
// import NavigationUtils from '../utils/NavigationUtils';
import Colors from '../utils/Colors';
import { useNavigation } from '@react-navigation/native';
const CommingSoon = ({ route }) => {
    const navigation = useNavigation()
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })

        return () => {
        };
    }, [])

    return (
        <View style={{ backgroundColor: "#15141F", flex: 1, justifyContent: "center", alignItems: "center" }}>
            <View style={{ width: "80%", height: moderateScale(250), backgroundColor: "#25163b", justifyContent: "center", borderRadius: scale(15), padding: scale(15) }}>
                <Text style={{ textAlign: "center", color: "#fff", fontWeight: "bold", fontSize: 28 }}>Comming Soon</Text>
                <Text style={{ textAlign: "center", color: "#fff", fontWeight: "bold", fontSize: 22, marginTop: moderateScale(15) }}>{route.params?.content}</Text>
            </View>
            <LinearGradient
                start={{ x: 0.0, y: 1.0 }}
                end={{ x: 1.0, y: 1.0 }}
                colors={Colors.gradientColors}
                style={{
                    width: "75%", borderRadius: 5,
                    alignSelf: 'center',
                    overflow: 'hidden',
                    marginTop: scale(50)
                }}
            >
                <TouchableOpacity
                    onPress={() => {
                        navigation.goBack()
                        // navigation.openDrawer()
                    }}
                    activeOpacity={0.8}
                    style={{
                        padding: 15,
                        alignSelf: 'center',
                        justifyContent: 'center',
                        backgroundColor: Colors.blackButtonBackground,
                        width: '99.5%',
                        margin: 1,
                        borderRadius: 5,
                        flexDirection: "row",
                    }}
                >
                    <Text style={{ color: '#fff', textAlign: 'center', fontSize: 16, marginLeft: scale(10) }}>Return</Text>
                </TouchableOpacity>
            </LinearGradient>
        </View>
    )
}

export default CommingSoon

const styles = StyleSheet.create({})