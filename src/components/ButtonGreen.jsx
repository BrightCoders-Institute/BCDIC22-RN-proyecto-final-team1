import { Text, TouchableOpacity, View } from "react-native";
import React, { Component } from "react";
import { Button } from "../themes/ButtonStyle";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS } from "../themes/colors";

export class ButtonGreen extends Component {
  render() {
    return (
      <TouchableOpacity style={Button.ButtonGreen} onPress={this.props.onPress}>
        <MaterialCommunityIcons
          name="check"
          size={20}
          color={COLORS.WHITE}
          style={Button.ButtonGreenStyleIcon}
        />
        <Text style={Button.ButtonGreenText}>{this.props.Text}</Text>
      </TouchableOpacity>
    );
  }
}

export default ButtonGreen;
