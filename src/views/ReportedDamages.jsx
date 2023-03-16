import React, { Component } from 'react';
import { ScrollView, View } from "react-native";
import Headimg from "../components/Headimg";
import { imgHeadMyRecords, cardImg } from "../themes/Urls";
import Cards from "../components/Cards";
import { ReportedDamageStyle } from '../themes/ReportedDamageStyle';

export class ReportedDamages extends Component {
    render() {
        return (
          <View style={ReportedDamageStyle.container}>
            <View>
              <Headimg ImgUrl={imgHeadMyRecords} Text={`Daños Reportados`} />
            </View>
            <ScrollView style={ReportedDamageStyle.scrollView}>
              <Cards img={cardImg} />
              <Cards img={cardImg} />
              <Cards img={cardImg} />
              <Cards img={cardImg} />
            </ScrollView>
          </View>
        );
      }
    }

export default ReportedDamages