import React, { Component } from "react";
import { ScrollView, View } from "react-native";
import Headimg from "../components/Headimg";
import { imgHeadMyRecords, cardImg } from "../themes/Urls";
import Cards from "../components/Cards";
import { MyRecordStyle } from "../themes/MyRecordsStyle";
import { db, auth, storage } from "../api/firebase";
import { collection, getDocs } from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage";

export class MyRecords extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reports: [],
    };
  }

  async componentDidMount() {
    await this.getReports();
  }

  getReports = async () => {
    try {
      const query = collection(db, "users", auth.currentUser.uid, "reports");
      const querySnapshot = await getDocs(query);
      let newarray = [];
      for (const doc of querySnapshot.docs) {
        const itemData = doc.data();
        let imgUrl = await this.getImage(itemData.idImg);
        if (imgUrl.startsWith("Firebase")) {
          imgUrl = "";
        }
        const itemArray = {
          data: {
            ...itemData,
            idImgUrl: imgUrl,
          },
          id: doc.id,
        };
        newarray.push(itemArray);
      }
      this.setState({ reports: newarray });
    } catch (error) {
      console.log("error", error.message);
    }
  };

  getImage = async (idImg) => {
    try {
      const refImage = ref(storage, `${auth.currentUser.uid}/${idImg}`);

      const response = await getDownloadURL(refImage);
      return response;
    } catch (error) {
      return error.message;
    }
  };
  render() {
    return (
      <View style={MyRecordStyle.view}>
        <View>
          <Headimg ImgUrl={imgHeadMyRecords} Text={`Mis Registros`} />
        </View>
        <ScrollView style={MyRecordStyle.scrollView}>
          {this.state.reports.map((item) => (
            <Cards
              key={item.id}
              img={item.data.idImgUrl}
              Descri={item.data.descripcion}
              onPress={() => {
                this.props.navigation.navigate("Admin", {item: item.data});
              }}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}

export default MyRecords;