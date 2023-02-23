import React, { Component } from "react";
import { Text, View } from "react-native";
import Headimg from "../components/Headimg";

export class AddRecord extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Headimg
          Text="Registro de Daños"
          ImgUrl="https://img.freepik.com/foto-gratis/fondo-blanco-pared-piedra-pintada_1252-1057.jpg?w=1380&t=st=1677195424~exp=1677196024~hmac=b0d850dcbcb3aecdf0279c8eed2c728ea9bd6eb61a3091876fbf9adae18534e6"
        />
      </View>
    );
  }
}

export default AddRecord;
