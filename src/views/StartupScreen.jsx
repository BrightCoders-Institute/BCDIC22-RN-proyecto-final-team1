import { Text, View, Image } from "react-native";
import React, { Component } from "react";
import ButtonBlue from "../components/ButtonBlue";
import ButtonWhite from "../components/ButtonWhite";
import { StartupStyle } from "../themes/StartupStyle";
import { navigate } from './../../node_modules/@react-navigation/routers/src/CommonActions';

export class StartupScreen extends Component {
  render() {
    return (
      <View style={StartupStyle.StartupScreen}>
        <View>
          <Image
            source={require("../../img/damageControl.png")}
            style={StartupStyle.Image}
          />
          <Text style={StartupStyle.Text}>Damage Control</Text>
        </View>
        <View style={StartupStyle.ButtonContainer}>
          <ButtonBlue Text="Iniciar sesion" onPress={() => {this.props.navigation.navigate("Login")}}/>
          <View style={StartupStyle.Buttonspace}>
            <ButtonWhite Text="Registrarse" onPress={() => {this.props.navigation.navigate("SignUpScreen")}}/>
          </View>
        </View>
      </View>
    );
  }
}

export default StartupScreen;
