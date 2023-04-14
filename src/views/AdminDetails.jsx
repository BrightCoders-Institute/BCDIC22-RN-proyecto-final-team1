import {
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { Component } from "react";
import MapView, { Marker } from "react-native-maps";
import { COLORS } from "../themes/colors";
import { Divider } from "react-native-paper";
import { cardImg } from "../themes/Urls";
import { mapDark } from "../themes/MapStyle";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { DetailStyle } from "../themes/DetailStyle";
import ButtonGreen from "../components/ButtonGreen";
import { Button } from "../themes/ButtonStyle";
import { db } from "../api/firebase";
import { deleteDoc, doc } from "firebase/firestore";
import LoadingScreen from "./LoadingScreen";

export class AdminDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {},
      dateConvert: "",
      renderMapView: false,
      iduser: "",
      id: "",
    };
  }

  componentDidMount() {
    this.setState({
      item: this.props.route.params.item,
      dateConvert: new Date(
        this.props.route.params.item.fecha.seconds * 1000 +
          this.props.route.params.item.fecha.nanoseconds / 1000000
      ),
      renderMapView: true,
      iduser: this.props.route.params.iduser,
      id: this.props.route.params.id,
    });
  }

  delateReport = async () => {
    const reportRef = doc(
      db,
      "users",
      this.state.iduser,
      "reports",
      this.state.id
    );
    await deleteDoc(reportRef);

    Alert.alert(
      "Reporte resuelto",
      "El reporte se ha resuelto con éxito y se ha eliminado.",
      [
        {
          text: "Aceptar",
          onPress: () => {
            this.props.navigation.push("MyDrawerAdmin");
          },
        },
      ]
    );
  };

  render() {
    return this.state.item.descripcion?.length === 0 ? (
      <LoadingScreen />
    ) : (
      <View style={DetailStyle.containerDetails}>
        <ScrollView>
          <View>
            {this.state.renderMapView ? (
              <MapView
                initialRegion={{
                  latitude: this.state.item.locacion.latitude,
                  longitude: this.state.item.locacion.longitude,
                  latitudeDelta: 0.03,
                  longitudeDelta: 0.03,
                }}
                customMapStyle={mapDark}
                style={DetailStyle.customMap}
              >
                <Marker coordinate={this.state.item.locacion} />
              </MapView>
            ) : (
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
            )}

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
              {this.state.item?.idImgUrl ? (
                <Image
                  source={{ uri: this.state.item.idImgUrl }}
                  style={DetailStyle.img}
                />
              ) : (
                <Image source={{ uri: cardImg }} style={DetailStyle.img} />
              )}
            </View>
            <View style={DetailStyle.containerDesc}>
              <Text style={DetailStyle.textDesc}>Descripción</Text>
              <Divider style={DetailStyle.dividerDesc} />
            </View>
            <View style={DetailStyle.containerDescDetails}>
              <Text style={DetailStyle.textDescDetails}>
                {this.state.item.descripcion}
              </Text>
            </View>
            <View style={DetailStyle.containerDate}>
              <Text style={DetailStyle.textDate}>Fecha</Text>
              <Divider style={DetailStyle.dividerDate} />
            </View>
            <View style={DetailStyle.containerDateDetails}>
              <Text style={DetailStyle.textDateDetails}>
                {this.state.dateConvert?.toLocaleString()}
              </Text>
            </View>
            <View style={Button.ButtonGreenContainer}>
              <ButtonGreen
                Text={`Marcar como \n resuelto`}
                onPress={() => {
                  this.delateReport();
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
