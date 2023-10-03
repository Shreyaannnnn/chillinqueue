import React from 'react'
import { Text } from 'react-native'


const TextField = ({ content, textColor, fontWeight, fontSize, textAlign, ml, mb, tdl }) => {
    return (
        <Text style={{ color: textColor, marginLeft: ml, fontSize: Number(fontSize), fontWeight, textAlign, marginBottom: mb, textDecorationLine: tdl }}>{content}</Text>
    )
}

export default TextField