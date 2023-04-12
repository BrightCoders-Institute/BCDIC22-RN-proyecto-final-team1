import React, { Component } from 'react';
import { ScrollView, View } from "react-native";
import Headimg from "../components/Headimg";
import { imgHeadMyRecords, cardImg } from "../themes/Urls";
import Cards from "../components/Cards";
import { ReportedDamageStyle } from '../themes/ReportedDamageStyle';
import { db, auth, storage } from "../api/firebase";
import { collection, getDocs } from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage";

export class ReportedDamages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reports: [],
    };
  }

  async componentDidMount() {
    const users = await this.getAllUsers();
    const promises = users.map(item => this.getReportsById(item.userid));

    Promise.all(promises)
    .then(result => {
      const combinedArray = result.flatMap(arr => arr).filter(obj => Object.keys(obj).length !== 0);
      this.setState({ reports: combinedArray })
    })
    .catch(error => {
      console.log('error', error);
    });
  }

  getReports = async () => {
    try {
      const query = collection(db, "users", auth.currentUser.uid, "reports");
      const querySnapshot = await getDocs(query);
      let newarray = [];
      for (const doc of querySnapshot.docs) {
        const itemData = doc.data();
        let imgUrl = await this.getImage(itemData.idImg, auth.currentUser.uid);
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

  getReportsById = async (id) => {
    try {
      const query = collection(db, "users", id, "reports");
      const querySnapshot = await getDocs(query);
      let newarray = [];
      for (const doc of querySnapshot.docs) {
        const itemData = doc.data();
        let imgUrl = await this.getImage(itemData.idImg, id);
        if (imgUrl.startsWith("Firebase")) {
          console.log(imgUrl)
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
      return newarray;
    } catch (error) {
      console.log("error", error.message);
    }
  };

  getAllUsers = async () => {
    try {
      const query = collection(db, "users");
      const querySnapshot = await getDocs(query);
      let listusers = [];
      for (const doc of querySnapshot.docs) {
        const itemUser = { userid: doc.id, data: doc.data()};
        listusers.push(itemUser);
        
      }
      return listusers;
    } catch (error) {
      console.log("error", error.message);
    }
  };

  getImage = async (idImg, iduser) => {
    try {
      const refImage = ref(storage, `${iduser}/${idImg}`);

      const response = await getDownloadURL(refImage);
      return response;
    } catch (error) {
      return error.message;
    }
  };
    render() {
        return (
          <View style={ReportedDamageStyle.container}>
            <View>
              <Headimg ImgUrl={imgHeadMyRecords} Text={`Daños Reportados`} />
            </View>
            <ScrollView style={ReportedDamageStyle.scrollView}>
            {this.state.reports.map((item) => (
            <Cards
              key={item.id}
              img={item.data.idImgUrl}
              Descri={item.data.descripcion}
              onPress={() => {
                this.props.navigation.navigate("Details");
              }}
            />
          ))}
            </ScrollView>
          </View>
        );
      }
    }

export default ReportedDamages