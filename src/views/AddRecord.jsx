import React, { Component } from "react";
import { Text, View } from "react-native";
import Headimg from "../components/Headimg";
import { imgHea, cardImg } from "../themes/Urls";
import Cards from "../components/Cards";

export class AddRecord extends Component {
  render() {
    return (
      <View>
        <Cards img={cardImg} />
      </View>
    );
  }
}

export default AddRecord;
