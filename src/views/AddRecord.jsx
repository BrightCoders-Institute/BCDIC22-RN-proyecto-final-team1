import React, { Component } from "react";
import {
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  View,
  ActivityIndicator,
  Alert,
} from "react-native";
import Headimg from "../components/Headimg";
import { imgHead } from "../themes/Urls";
import { TextInput, Divider } from "react-native-paper";
import { COLORS } from "../themes/colors";
import { MaterialIcons } from "@expo/vector-icons";
import MapView, { Marker } from "react-native-maps";
import { AddRecordStyle } from "../themes/AddRecordStyle";
import { mapDark } from "../themes/MapStyle";
import * as ImagePicker from "expo-image-picker";
import { auth, storage, db } from "../api/firebase";
import { doc, collection, query, getDocs, setDoc } from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import ButtonBlue from "../components/ButtonBlue";

export class AddRecord extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      isLoading: false,
      uploading: false,
      descripcion: "",
      markerLocation: {
        latitude: 19.244,
        longitude: -103.725,
      },
    };
  }

  pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    const source = { uri: result.assets[0].uri };
    this.setState({ image: source });
  };

  uploadImage = async () => {
    this.setState({ uploading: true });
    const response = await fetch(this.state.image.uri);
    const blob = await response.blob();
    const id = uuidv4();
    const refImage = ref(storage, `${auth.currentUser.uid}/${id}`);
    try {
      await uploadBytes(refImage, blob);
      this.setState({ uploading: false, image: null });

      const report = {
        descripcion: this.state.descripcion,
        idImg: id,
        locacion: this.state.markerLocation,
        fecha: new Date(),
      };

      const newReport = doc(
        collection(db, `users/${auth.currentUser.uid}/reports`)
      );
      const users = query(collection(db, "users"));
      const querySnap = await getDocs(users);
      const queryData = querySnap.docs.map((reports) => ({
        ...reports.data(),
        id: reports.id,
      }));
      queryData.map(async () => {
        await setDoc(newReport, report);
      });
      Alert.alert("Reporte agregado con éxito");
    } catch (error) {
      Alert.alert("Error al agregar reporte");
    }
    this.setState({ descripcion: "" });
  };

  handleMapPress = (event) => {
    const { latitude, longitude } = event.nativeEvent.coordinate;
    this.setState({ markerLocation: { latitude, longitude } });
  };

  render() {
    const { markerLocation } = this.state;
    const { image, isLoading, descripcion } = this.state;
    return (
      <View>
        <ScrollView style={AddRecordStyle.scroll}>
          <Headimg ImgUrl={imgHead} Text={`Registro de \nDaños`} />
          <View style={AddRecordStyle.view}>
            <TextInput
              multiline={true}
              mode="outlined"
              label="Descripción"
              outlineColor={COLORS.WHITE}
              activeOutlineColor={COLORS.WHITE}
              style={AddRecordStyle.textInput}
              textColor={COLORS.WHITE}
              placeholderTextColor={COLORS.WHITE}
              onChangeText={(text) => this.setState({ descripcion: text })}
              value={ descripcion }
            />
            <TouchableOpacity
              onPress={this.pickImage}
              style={AddRecordStyle.addImage}
            >
              <MaterialIcons
                name="add-a-photo"
                size={50}
                color={COLORS.WHITE}
              />
              <Text style={AddRecordStyle.text}>Inserte una imagen</Text>
            </TouchableOpacity>
            
              {isLoading && (
                <ActivityIndicator size="large" color={COLORS.loaderColor} />
              )}
              {image && (
              <View style={AddRecordStyle.UploadImgContainer}>
                <Image
                  source={{ uri: image.uri }}
                  style={AddRecordStyle.UploadImg}
                />
                </View>
              )}
            
            <View style={AddRecordStyle.viewUbi}>
              <Text style={AddRecordStyle.textUbi}>Ubicación</Text>
              <Divider style={AddRecordStyle.divider} />
            </View>
            <MapView
              initialRegion={{
                latitude: 19.244,
                longitude: -103.725,
                latitudeDelta: 0.03,
                longitudeDelta: 0.03,
              }}
              showsUserLocation={true}
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
            <View style={AddRecordStyle.ButtonAdd}>
              <ButtonBlue
                Text="Agregar reporte"
                onPress={() => this.uploadImage()}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default AddRecord;
