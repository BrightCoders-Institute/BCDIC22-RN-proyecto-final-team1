import { FlatList, Text, View } from "react-native";
import React, { Component } from "react";
import { db, auth } from "../api/firebase";
import { collection, getDocs } from "firebase/firestore";

export class Getreports extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reports: {
        data: [],
        id: "",
      },
    };
  }

  async componentDidMount(){
    await this.getReports();
  }
  getReports = async () => {
    try {
      const query = collection(db, "users", auth.currentUser.uid, "reports");

      const querySnapshot = await getDocs(query);

      let newarray = [];

      querySnapshot.forEach((doc) => {
        let itemArray = {
          data: doc.data(),
          id: doc.id,
        };
        //let date = new Date(itemArray.data.fecha);
        //itemArray.data.fecha = date;
        newarray = [...newarray, itemArray];
      });

      this.setState((prevState) => {
        let reports = Object.assign({}, prevState.reports);
        reports = newarray;
        return { reports };
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  render() {
    return (
      <View style={{paddingTop: 35}}>
        <Text>getreports</Text>
        <FlatList
          data={this.state.reports}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <>
            <View style={{borderRadius: 15, backgroundColor: 'gray', marginHorizontal:10, marginVertical:10}}>
              <Text>{item.data.descripcion}</Text>
              <Text>{item.data.idImg}</Text>
              <Text>{item.data.fecha.toDate().toString()}</Text>
              <Text>{JSON.stringify(item.data.locacion)}</Text>
              <Text></Text>
            </View>
            </>

          )}
        />
      </View>
    );
  }
}

export default Getreports;
