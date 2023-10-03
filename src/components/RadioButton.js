import * as React from 'react';
import { View } from 'react-native';
import { RadioButton } from 'react-native-paper';
import TextField from './TextField';

const RadioButtonn = () => {
  const [checked, setChecked] = React.useState('male');
//   console.log(checked);

  return (
    <View style={{marginLeft:50}}>
        <View style={{flexDirection:"row"}}>
            <RadioButton
            value="male"
            status={ checked === 'male' ? 'checked' : 'unchecked' }
            onPress={() => setChecked('male')}
            />
            <TextField content={"Male"} textColor="#fff" fontSize="18" textAlign={"center"} MarginTop={10}/>
        </View>
        <View style={{flexDirection:"row"}}>
            <RadioButton
                value="female"
                status={ checked === 'female' ? 'checked' : 'unchecked' }
                onPress={() => setChecked('female')}
            />
            <TextField content={"Female"} textColor="#fff" fontSize="18" textAlign={"center"} MarginTop={10}/>
        </View>

        <View style={{flexDirection:"row"}}>
            <RadioButton
                value="nonbinary"
                status={ checked === 'nonbinary' ? 'checked' : 'unchecked' }
                onPress={() => setChecked('nonbinary')}
            />
            <TextField content={"Non Binary"} textColor="#fff" fontSize="18" textAlign={"center"} MarginTop={10}/>
        </View>
    </View>
  );

};

export default RadioButtonn;