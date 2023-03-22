import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Alert, Image } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { auth, storage, db} from '../api/firebase'
import { doc, collection, query, getDocs, setDoc} from 'firebase/firestore'
import { ref, uploadBytes } from 'firebase/storage'
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

class Uploadimg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      uploading: false,
    };
  }
  pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    const source = { uri: result.assets[0].uri };
    console.log(source);
    this.setState({ image: source });
  };
  uploadImage = async () => {
    this.setState({ uploading: true });
    const response = await fetch(this.state.image.uri);
    const blob = await response.blob();
    const id = uuidv4();
    const refImage = ref(storage, `${auth.currentUser.uid}/${id}`);
    try {
    await  uploadBytes(refImage, blob)
    this.setState({ uploading: false, image: null });
    
    const reporte = {
      descripcion: 'Un nuevo reporte',
      idImg: id,
      locacion: 'Ciudad de México',
      fecha: new Date(),
    };
    
      const newReporte = doc(collection(db, `users/${auth.currentUser.uid}/reports`));
      const q = query(collection(db, 'users'));
      const querySnap = await getDocs(q);
      const queryData = querySnap.docs.map((reports) => ({
        ...reports.data(),
        id: reports.id
      }));
      queryData.map(async() => {
        await setDoc(newReporte, reporte);
      })
      console.log('Reporte agregado');
    } catch (error) {
      console.error('Error al agregar el reporte:', error);
    }
  };
  
  // agregarReporte = async () => {
  //   const usuarioId = auth.currentUser.uid;
  //   const reporte = {
  //     descripcion: 'Un nuevo reporte',
  //     idImg: '123',
  //     locacion: 'Ciudad de México',
  //     fecha: new Date(),
  //   };
  //   try {
  //     const newReporte = doc(collection(db, `users/${auth.currentUser.uid}/reports`));
  //     const q = query(collection(db, 'users'));
  //     const querySnap = await getDocs(q);
  //     const queryData = querySnap.docs.map((reports) => ({
  //       ...reports.data(),
  //       id: reports.id
  //     }));
  //     queryData.map(async() => {
  //       await setDoc(newReporte, reporte);
  //     })
  //     console.log('Reporte agregado');
  //   } catch (error) {
  //     console.error('Error al agregar el reporte:', error);
  //   }
  // };
  
  render() {
    const { image, uploading } = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.selectButton} onPress={this.pickImage}>
          <Text style={styles.buttonText}>Select Image</Text>
        </TouchableOpacity>
        <View style={styles.imageContainer}>
          {image && <Image source={{ uri: image.uri }} style={{ width: 300, height: 300 }} />}
          <TouchableOpacity style={styles.uploadButton} onPress={this.uploadImage} disabled={!image || uploading}>
            <Text style={styles.buttonText}>Upload Image</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

export default Uploadimg;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectButton: {
    backgroundColor: '#009688',
    padding: 10,
    borderRadius: 5,
  },
  uploadButton: {
    backgroundColor: '#009688',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
  imageContainer: {
    marginTop: 30,
    width: '100%',
    alignItems: 'center',
  },
});