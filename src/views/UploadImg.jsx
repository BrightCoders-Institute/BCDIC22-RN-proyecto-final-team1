import React, { Component } from 'react';
import { Button, Image, View, Platform, ActivityIndicator } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default class Uploadimg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      isLoading: false
    };
  }

  pickImage = async () => {
    this.setState({ isLoading: true });
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.assets[0].uri });
    }
    this.setState({ isLoading: false });
  };

  render() {
    const { image, isLoading } = this.state;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button title="Pick an image from camera roll" onPress={this.pickImage} />
        {isLoading && <ActivityIndicator size="large" color="#0000ff" />}
        {image && <Image source={{ uri: image }} style={{ width: "100%", height: 300 }} />}
      </View>
    );
  }
}