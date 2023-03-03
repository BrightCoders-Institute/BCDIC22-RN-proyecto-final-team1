import React, { Component } from "react";
import { ScrollView, View } from "react-native";
import Headimg from "../components/Headimg";
import { imgHeadMyRecords, cardImg } from "../themes/Urls";
import Cards from "../components/Cards";
import { MyRecordStyle } from "../themes/MyRecordsStyle";

export class MyRecords extends Component {
  render() {
    return (
      <View style={MyRecordStyle.view}>
        <View>
          <Headimg ImgUrl={imgHeadMyRecords} Text={`Mis Registros`} />
        </View>
        <ScrollView style={MyRecordStyle.scrollView}>
          <Cards img={cardImg} onPress={() => {this.props.navigation.navigate("Details")}} />
          <Cards img={cardImg} onPress={() => {this.props.navigation.navigate("Details")}}/>
          <Cards img={cardImg} onPress={() => {this.props.navigation.navigate("Details")}}/>
          <Cards img={cardImg} onPress={() => {this.props.navigation.navigate("Details")}}/>
        </ScrollView>
      </View>
    );
  }
}

export default MyRecords;
