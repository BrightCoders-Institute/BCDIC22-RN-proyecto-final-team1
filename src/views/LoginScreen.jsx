import { Text, View } from "react-native";
import React, { Component } from "react";
import ButtonBlue from "../components/ButtonBlue";
import { TextInput } from "react-native-paper";
import { LoginScreenStyle } from "../themes/LoginStyle";
import { COLORS } from "../themes/colors";
import TextInputHandle from "../components/TextInputHandle";

export class LoginScreen extends Component {
  render() {
    return (
      <View style={LoginScreenStyle.LoginStyle}>
        <Text style={LoginScreenStyle.Text}>Iniciar Sesión</Text>
        <View style={LoginScreenStyle.LoginContainer}>
          <TextInputHandle
            label="Correo electronico"
            placeholder="example@gmail.com"
          />
          <TextInputHandle label="Contraseña" placeholder="Contraseña" />
          <View View style={LoginScreenStyle.buttonSession}>
            <ButtonBlue Text="Iniciar sesion" />
          </View>
        </View>
      </View>
    );
  }
}

export default LoginScreen;
