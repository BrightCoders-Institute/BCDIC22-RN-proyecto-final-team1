import React, { Component } from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import Headimg from "../components/Headimg";
import { imgHead } from "../themes/Urls";
import { TextInput, Divider } from "react-native-paper";
import { COLORS } from "../themes/colors";
import { MaterialIcons } from "@expo/vector-icons";
import MapView from "react-native-maps";
import { AddRecordStyle } from "../themes/AddRecordStyle";
export class AddRecord extends Component {
  render() {
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
            <TouchableOpacity style={AddRecordStyle.addImage}>
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
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
              style={AddRecordStyle.map}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default AddRecord;
