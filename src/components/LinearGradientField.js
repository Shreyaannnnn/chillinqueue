import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { TextInput } from 'react-native'

const LinearGradientField = ({ width, ph, ktype, maxLength, value, onChange, innerRef }) => {
    return (

        <LinearGradient start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }} colors={['#a94a73', '#10a1ba', '#1d75e7', '#1d608e', "#1ccfe7",]} style={{
            width: width, borderRadius: 5,
            overflow: 'hidden',
            alignSelf: 'center',
            marginTop: 10,
        }} >
            <TextInput maxLength={maxLength} ref={innerRef} placeholderTextColor={"#fff"} value={value} onChangeText={onChange} keyboardType={ktype} placeholder={ph} style={{
                padding: 15,
                alignSelf: 'center',
                justifyContent: 'center',
                backgroundColor: "#413f60",
                width: '99%',
                margin: 1,
                borderRadius: 5,
                color: '#fff',
                fontSize: ktype == "numeric" ? 20 : 16
            }} />
        </LinearGradient>

    )
}

export default LinearGradientField