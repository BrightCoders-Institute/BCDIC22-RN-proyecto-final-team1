import React, { Component } from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import Headimg from "../components/Headimg";
import { imgHead } from "../themes/Urls";
import { TextInput, Divider } from "react-native-paper";
import { COLORS } from "../themes/colors";
import { MaterialIcons } from "@expo/vector-icons";
import MapView, { Marker } from "react-native-maps";
import { AddRecordStyle } from "../themes/AddRecordStyle";
import { mapDark } from "../themes/MapStyle";
import ImagePicker from 'react-native-image-picker';


function seleccionarImagen() {
  const options = {
    title: 'Seleccionar imagen',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

  ImagePicker.showImagePicker(options, (response) => {
    if (response.didCancel) {
      console.log('El usuario canceló la selección de imagen');
    } else if (response.error) {
      console.log('Error al seleccionar la imagen:', response.error);
    } else {
      console.log(response.uri);
    }
  });
}

export class AddRecord extends Component {
  state = {
    markerLocation: null,
  };
  handleMapPress = (event) => {
    const { latitude, longitude } = event.nativeEvent.coordinate;
    this.setState({ markerLocation: { latitude, longitude } });
  };

  
  render() {
    const { markerLocation } = this.state;
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
            <TouchableOpacity onPress={seleccionarImagen} style={AddRecordStyle.addImage}>
              <MaterialIcons
                name="add-a-photo"
                size={50}
                color={COLORS.WHITE}
              />
              <Text style={AddRecordStyle.text}>Inserte una imagen</Text>
            </TouchableOpacity>
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
