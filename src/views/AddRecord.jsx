import React, { Component } from "react";
import { Text, View } from "react-native";
import Headimg from "../components/Headimg";
import { ImgHead } from "../themes/Urls";


export class AddRecord extends Component {
  render() {
    return (
      <View>
        <Headimg
          Text="Registro de Daños"
          ImgUrl={ImgHead}
        />
      </View>
    );
  }
}

export default AddRecord;
