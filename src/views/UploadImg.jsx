import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Alert, Image } from "react-native";
import React, { useState } from "react";
import * as ImagePicker from 'expo-image-picker';
import {firebaseConfig} from '../../Firebase.config';

const Uploadimg = () => {
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    const source = { uri: result.uri};
    console.log(source);
    setImage(source);
  };

  const uploadImage = async () => {
    setUploading(true);
    const response = await fetch(image.uri);
    const blob = await response.blob();
    const filename = image.uri.substring(image.uri.lastIndexOf('/') + 1);
    var ref = firebaseConfig.storage().ref().child(filename).put(blob);

    try {
      await ref;
    } catch (e) {
      console.error(e);
    }
    setUploading(false);
    Alert.alert(
      'Image uploaded!',
    );
    setImage(null);
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.selectButton} onPress={pickImage}>
        <Text style={styles.buttonText}>Select Image</Text>
      </TouchableOpacity>
      <View style={styles.imageContainer}> 
        {image && <Image source={{ uri: image.uri }} style={{width:300 , height:300}} />}
        <TouchableOpacity style={styles.uploadButton} onPress={uploadImage}>
          <Text style={styles.buttonText}>Upload Image</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Uploadimg;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectButton: {
    backgroundColor: '#009688',
    padding: 10,
    borderRadius: 5,
  },
  uploadButton: {
    backgroundColor: '#009688',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
  imageContainer: {
    marginTop: 30,
    width: '100%',
    alignItems: 'center',
  },
});


