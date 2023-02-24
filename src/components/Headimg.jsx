import { Text, View, Image } from "react-native";
import React, { Component } from "react";
import { HeadCompStyle } from "../themes/HeadimgStyle";

export class Headimg extends Component {
  render() {
    return (
      <View style={HeadCompStyle.View}>
        <Image source={{ uri: this.props.ImgUrl }} style={HeadCompStyle.Img} />
        <Text style={HeadCompStyle.Text}>{this.props.Text}</Text>
      </View>
    );
  }
}

export default Headimg;
