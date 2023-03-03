import { Text, TouchableOpacity, View } from "react-native";
import React, { Component } from "react";
import { Button } from "../themes/ButtonStyle";

export class ButtonBlue extends Component {
  render() {
    return (
      <TouchableOpacity style={Button.ButtonBlue} onPress={this.props.onPress}>
        <Text style={Button.textWhite}>{this.props.Text}</Text>
      </TouchableOpacity>
    );
  }
}

export default ButtonBlue;
