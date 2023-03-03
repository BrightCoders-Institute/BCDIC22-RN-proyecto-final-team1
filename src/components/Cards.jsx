import React, { Component } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { COLORS } from "../themes/colors";
import { CardStyle } from "../themes/CardStyle";
import { imgCard } from "../themes/Urls";

export class Cards extends Component {
  render() {
    return (
      <TouchableOpacity style={CardStyle.bottomCard} onPress={this.props.onPress}>
        <View style={CardStyle.topView}>
          <Image
            source={{ uri: this.props.img }}
            style={CardStyle.imgCard}
          />
          <View style={CardStyle.bottomView}>
            <Text style={CardStyle.headText}>Descripción</Text>
            <Text style={CardStyle.descText}>
              El techo de mi casa se esta cayendo y esta con un grieta
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

export default Cards;
