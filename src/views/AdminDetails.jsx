import { ScrollView, Text, View, Image, TouchableOpacity } from "react-native";
import React, { Component } from "react";
import MapView from "react-native-maps";
import { COLORS } from "../themes/colors";
import { Divider } from "react-native-paper";
import { cardImg } from "../themes/Urls";
import { mapDark } from "../themes/MapStyle";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { DetailStyle } from "../themes/DetailStyle";
import ButtonGreen from "../components/ButtonGreen";
import { Button } from "../themes/ButtonStyle";

export class AdminDetails extends Component {
  render() {
    return (
      <View style={DetailStyle.containerDetails}>
        <ScrollView>
          <View>
            <MapView
              initialRegion={{
                latitude: 19.244,
                longitude: -103.725,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
              customMapStyle={mapDark}
              style={DetailStyle.customMap}
            />
            <View style={DetailStyle.containerArrow}>
              <TouchableOpacity>
                <MaterialCommunityIcons
                  name="chevron-left"
                  size={60}
                  color={COLORS.WHITE}
                  onPress={() => this.props.navigation.goBack()}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={DetailStyle.containerInfo}>
            <View style={DetailStyle.containerDirection}>
              <Text style={DetailStyle.textDetail}>Fotografía</Text>
              <Divider style={DetailStyle.dividerPhoto} />
            </View>
            <View style={DetailStyle.containerImg}>
              <Image source={{ uri: cardImg }} style={DetailStyle.img} />
            </View>
            <View style={DetailStyle.containerDesc}>
              <Text style={DetailStyle.textDesc}>Descripción</Text>
              <Divider style={DetailStyle.dividerDesc} />
            </View>
            <View style={DetailStyle.containerDescDetails}>
              <Text style={DetailStyle.textDescDetails}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                auctor, nisl eget ultricies lacinia, nisl nisl aliquet nisl, nec
                aliquet nisl nisl sit amet nisl. Donec auctor, nisl eget
                ultricies lacinia, nisl nisl aliquet nisl, nec aliquet nisl nisl
                sit amet nisl.
              </Text>
            </View>
            <View style={DetailStyle.containerDate}>
              <Text style={DetailStyle.textDate}>Fecha</Text>
              <Divider style={DetailStyle.dividerDate} />
            </View>
            <View style={DetailStyle.containerDateDetails}>
              <Text style={DetailStyle.textDateDetails}>10/12/2022</Text>
            </View>
            <View style={Button.ButtonGreenContainer}>
              <ButtonGreen
                Text={`Marcar como    \n     resuelto`}
                onPress={() => {
                  this.props.navigation.navigate("MyDrawer");
                }}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default AdminDetails;
