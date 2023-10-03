import React, { useState } from 'react';
import { View, Text, Image, Button, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const InputImage = () => {
  const [selectedImage1, setSelectedImage1] = useState(null);
  const [selectedImage2, setSelectedImage2] = useState(null);
  const [selectedImage3, setSelectedImage3] = useState(null);
  const [selectedImage4, setSelectedImage4] = useState(null);

  const pickImage1 = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [3, 2],
      quality: 1,
    });

    if (!result.canceled) {
      let selectedAsset = result.assets[0];
      let selectedUri = selectedAsset.uri;
      setSelectedImage1(selectedUri);
    }
  };

  const pickImage2 = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [3, 2],
      quality: 1,
    });

    if (!result.canceled) {
      let selectedAsset = result.assets[0];
      let selectedUri = selectedAsset.uri;
      setSelectedImage2(selectedUri);
    }
  };

  const pickImage3 = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [3, 2],
      quality: 1,
    });

    if (!result.canceled) {
      let selectedAsset = result.assets[0];
      let selectedUri = selectedAsset.uri;
      setSelectedImage3(selectedUri);
    }
  };

  const pickImage4 = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [3, 2],
      quality: 1,
    });

    if (!result.canceled) {
      let selectedAsset = result.assets[0];
      let selectedUri = selectedAsset.uri;
      setSelectedImage4(selectedUri);
    }
  };













  return (
    <View style={{flexDirection:"row", marginHorizontal:20, marginBottom:-55}}>

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' ,marginBottom:40}}>
        {selectedImage1 && <Image source={{ uri: selectedImage1 }} style={{ width: 74, height: 74,position:'absolute', zIndex:9999, borderRadius:14 }} />}

            <TouchableOpacity
              // style={{height:30, width:30}}
            activeOpacity={0.9} onPress={pickImage1}>
            <Image source={require('../../assets/images/chillinq/imgupload.png')} height={30} width={30}/>
            </TouchableOpacity>

        {/* <Button title="Pick an image from gallery" onPress={pickImage} /> */}
        {/* {selectedImage && (
          <Text style={{ marginTop: 10 }}></Text>
        )} */}

        </View>



      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' ,marginBottom:40}}>
        {selectedImage2 && <Image source={{ uri: selectedImage2 }} style={{ width: 74, height: 74,position:'absolute', zIndex:9999, borderRadius:14 }} />}

            <TouchableOpacity
              // style={{height:30, width:30}}
            activeOpacity={0.5} onPress={pickImage2}>
            <Image source={require('../../assets/images/chillinq/imgupload.png')} height={30} width={30}/>
            </TouchableOpacity>
        </View>

        {/* <Button title="Pick an image from gallery" onPress={pickImage} /> */}
        {/* {selectedImage && (
          <Text style={{ marginTop: 10 }}></Text>
        )} */}

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' ,marginBottom:40}}>
        {selectedImage3 && <Image source={{ uri: selectedImage3 }} style={{ width: 74, height: 74,position:'absolute', zIndex:9999, borderRadius:14 }} />}

            <TouchableOpacity
              // style={{height:30, width:30}}
            activeOpacity={0.5} onPress={pickImage3}>
            <Image source={require('../../assets/images/chillinq/imgupload.png')} height={30} width={30}/>
            </TouchableOpacity>

        {/* <Button title="Pick an image from gallery" onPress={pickImage} /> */}
        {/* {selectedImage && (
          <Text style={{ marginTop: 10 }}></Text>
        )} */}
      </View>

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' ,marginBottom:40}}>
        {selectedImage4 && <Image source={{ uri: selectedImage4 }} style={{ width: 74, height: 74,position:'absolute', zIndex:9999, borderRadius:14 }} />}

            <TouchableOpacity
              // style={{height:30, width:30}}
            activeOpacity={0.5} onPress={pickImage4}>
            <Image source={require('../../assets/images/chillinq/imgupload.png')} height={30} width={30} />
            </TouchableOpacity>

        {/* <Button title="Pick an image from gallery" onPress={pickImage} /> */}
        {/* {selectedImage && (
          <Text style={{ marginTop: 10 }}></Text>
        )} */}
        </View>

    </View>
  );
};

export default InputImage;
