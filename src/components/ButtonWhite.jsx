import { Text, TouchableOpacity, View } from "react-native";
import React, { Component } from "react";
import { Button } from "../themes/ButtonStyle";

export class ButtonWhite extends Component {
  render() {
    return (
      <TouchableOpacity style={Button.ButtonWhite} onPress={this.props.onPress}>
        <Text style={Button.textDark}>{this.props.Text}</Text>
      </TouchableOpacity>
    );
  }
}

export default ButtonWhite;
