import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

const LinearGradientButton = ({ btnHandler, text, mt, width, val, bool }) => {
    return (
        <LinearGradient start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }} colors={['#a94a73', '#10a1ba', '#1d75e7', '#1d608e', "#1ccfe7",]} style={{
            width, borderRadius: 5,
            alignSelf: 'center',
            overflow: 'hidden',
            marginTop: mt
        }} >
            <TouchableOpacity disabled={(val && bool ? false : true)} activeOpacity={0.82} onPress={() => { btnHandler() }} style={{
                padding: 15,
                alignSelf: 'center',
                justifyContent: 'center',
                // backgroundColor: "#2d4a74",
                backgroundColor: "#383659",
                width: '99.5%',
                margin: 1,
                borderRadius: 5,

            }} >
                <Text style={{ color: '#fff', textAlign: 'center', fontSize: 18 }}>{text}</Text>
            </TouchableOpacity>
        </LinearGradient>
    )
}

export default LinearGradientButton