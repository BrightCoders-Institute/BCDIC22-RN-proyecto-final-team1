import { Text, View, Image, StyleSheet } from "react-native";
import React, { Component } from "react";
import { WelcomeStyle } from "../themes/WelcomeStyle";

export class WelcomeScreen extends Component {
  render() {
    return (
      <View style={WelcomeStyle.WelcomeScreen}>
        <View>
          <Text style={WelcomeStyle.Text}>
            Bienvenido{"\n"}a{"\n"}Damage Control
          </Text>
          <Image
            source={require("../../img/damageControl.png")}
            style={WelcomeStyle.LogoImg}
          ></Image>
        </View>
        <View>
          <Image
            source={require("../../img/left-arrow.png")}
            style={WelcomeStyle.Button}
          />
        </View>
      </View>
    );
  }
}

export default WelcomeScreen;
