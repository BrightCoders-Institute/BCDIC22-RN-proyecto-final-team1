import React, { Component } from "react";
import { Text, ScrollView, TouchableOpacity, Button, Image, View, Platform, ActivityIndicator} from "react-native";
import Headimg from "../components/Headimg";
import { imgHead } from "../themes/Urls";
import { TextInput, Divider } from "react-native-paper";
import { COLORS } from "../themes/colors";
import { MaterialIcons } from "@expo/vector-icons";
import MapView, { Marker } from "react-native-maps";
import { AddRecordStyle } from "../themes/AddRecordStyle";
import { mapDark } from "../themes/MapStyle";
import * as ImagePicker from 'expo-image-picker';
import { auth, storage } from '../api/firebase'
import { ref, uploadBytes } from 'firebase/storage'
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';



export class AddRecord extends Component {
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

  state = {
    markerLocation: null,
  };

  uploadImage = async () => {
    this.setState({ uploading: true });
    const response = await fetch(this.state.image.uri);
    const blob = await response.blob();
    const id = uuidv4();
    const refImage = ref(storage, `${auth.currentUser.uid}/${id}`);
    
    try {
      uploadBytes(refImage, blob)
        .then((snapshot) => {
          console.log('sube', snapshot);
          return true
        })
    } catch (e) {
      console.error(e);
      return false
    }
  };

  handleMapPress = (event) => {
    const { latitude, longitude } = event.nativeEvent.coordinate;
    this.setState({ markerLocation: { latitude, longitude } });
  };

  
  render() {
    const { markerLocation } = this.state;
    const { image, isLoading } = this.state;
    return (
      <View>
        <ScrollView style={AddRecordStyle.scroll}>
          <Headimg ImgUrl={imgHead} Text={`Registro de \n      Daños`} />
          <View style={AddRecordStyle.view}>
            <TextInput
              mode="outlined"
              label="Descripción"
              outlineColor={COLORS.WHITE}
              activeOutlineColor={COLORS.WHITE}
              style={AddRecordStyle.textInput}
              textColor={COLORS.WHITE}
              placeholderTextColor={COLORS.WHITE}
            />
            <TouchableOpacity onPress={this.pickImage} style={AddRecordStyle.addImage}>
              <MaterialIcons
                name="add-a-photo"
                size={50}
                color={COLORS.WHITE}
              />
              <Text style={AddRecordStyle.text}>Inserte una imagen</Text>
            </TouchableOpacity>
            <View style={AddRecordStyle.UploadImgContainer}>
              {isLoading && <ActivityIndicator size="large" color={COLORS.loaderColor} />}
              {image && <Image source={{ uri: image }} style={AddRecordStyle.UploadImg} />}
            </View>
            <View style={AddRecordStyle.viewUbi}>
              <Text style={AddRecordStyle.textUbi}>Ubicación</Text>
              <Divider style={AddRecordStyle.divider} />
            </View>
            <MapView
              initialRegion={{
                latitude: 19.244,
                longitude: -103.725,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
              customMapStyle={mapDark}
              style={AddRecordStyle.map}
              onPress={this.handleMapPress}
            >
              {markerLocation && (
                <Marker
                  coordinate={markerLocation}
                  title="Ubicación de desastre"
                />
              )}
            </MapView>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default AddRecord;