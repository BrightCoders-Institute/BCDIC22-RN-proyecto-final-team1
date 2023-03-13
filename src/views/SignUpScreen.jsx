import { View, Text, ScrollView, Alert } from "react-native";
import { React, Component } from "react";
import { SignUpStyle } from "../themes/SignUpStyle";
import ButtonBlue from "../components/ButtonBlue";
import TextInputHandle from "../components/TextInputHandle";
import TextInputPass from "../components/TextInputPass";
import { TextInput } from "react-native-paper";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { createProfile, auth } from "../api/firebase";

export class SignUpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValueName: "",
      inputValueHood: "",
      inputValueCp: "",
      inputValueMail: "",
      inputValuePassword: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(value, key) {
    this.setState((prevState) => {
      return {
        ...prevState,
        [key]: value,
      };
    });
  }

  createUser = () => {
    if (
      this.state.inputValueMail === "" &&
      this.state.inputValuePassword === ""
    ) {
      Alert.alert("Ingresar todos los datos necesarios!");
    }
    createUserWithEmailAndPassword(
      auth,
      this.state.inputValueMail,
      this.state.inputValuePassword
    )
      .then(async (res) => {
        console.log(res);
        await createProfile(
          res.user.uid,
          this.state.inputValueMail,
          this.state.inputValueName,
          this.state.inputValueHood,
          this.state.inputValueCp
        );
        Alert.alert("Cuenta creada exitosamente");
        this.props.navigation.navigate("Login");
        console.log(res);
      })
      .catch((error) => {
        switch (error.code) {
          case 'auth/email-already-in-use':
            Alert.alert('Email en uso');
            break;
          default:
            Alert.alert('Email o contrasena invalida');
            break;
        }
      });
  };

  render() {
    return (
      <View style={SignUpStyle.container}>
        <ScrollView style={SignUpStyle.scroll}>
          <Text style={SignUpStyle.title}>Registrarse</Text>
          <TextInputHandle
            label="Nombre Completo"
            placeholder="Nombre"
            keylabel="inputValueName"
            onChangeText={this.handleInputChange}
          />

          <TextInputHandle
            label="Colonia"
            placeholder="Colonia"
            keylabel="inputValueHood"
            onChangeText={this.handleInputChange}
          />

          <TextInputHandle
            label="Codigo Postal"
            placeholder="Codigo Postal"
            keylabel="inputValueCp"
            onChangeText={this.handleInputChange}
          />

          <TextInputHandle
            label="Correo electronico"
            placeholder="Correo electronico"
            keylabel="inputValueMail"
            onChangeText={this.handleInputChange}
          />

          <TextInputPass
            label="Contraseña"
            placeholder="Contraseña"
            keylabel="inputValuePassword"
            onChangeText={this.handleInputChange}
          />
          <View style={SignUpStyle.button}>
            <ButtonBlue Text="Crear Cuenta" onPress={this.createUser} />
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default SignUpScreen;
