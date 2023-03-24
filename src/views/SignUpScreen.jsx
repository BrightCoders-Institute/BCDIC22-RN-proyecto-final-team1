import { View, Text, ScrollView, Alert } from "react-native";
import { React, Component } from "react";
import { SignUpStyle } from "../themes/SignUpStyle";
import ButtonBlue from "../components/ButtonBlue";
import TextInputHandle from "../components/TextInputHandle";
import TextInputPass from "../components/TextInputPass";
import { TextInput } from "react-native-paper";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { createProfile, auth } from "../api/firebase";
import { Formik } from "formik";
import { COLORS } from "../themes/colors";

export class SignUpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formikProps: {
        name: "",
        hood: "",
        cp: "",
        mail: "",
        password: "",
      },
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
    if (this.state.mail === "" && this.state.password === "") {
      Alert.alert("Ingresar todos los datos necesarios!");
    }
    createUserWithEmailAndPassword(auth, this.state.mail, this.state.password)
      .then(async (res) => {
        console.log(res);
        await createProfile(
          res.user.uid,
          this.state.mail,
          this.state.name,
          this.state.hood,
          this.state.cp
        );
        Alert.alert("Cuenta creada exitosamente");
        this.props.navigation.navigate("Login");
        console.log(res);
      })
      .catch((error) => {
        switch (error.code) {
          case "auth/email-already-in-use":
            Alert.alert("Email en uso");
            break;
          default:
            Alert.alert("Email o contrasena invalida");
            break;
        }
      });
  };

  render() {
    return (
      <View style={SignUpStyle.container}>
        <ScrollView style={SignUpStyle.scroll}>
          <Text style={SignUpStyle.title}>Registrarse</Text>
          <Formik>
            <TextInputHandle
              label="Nombre Completo"
              placeholder="Nombre"
              keylabel="name"
              onChangeText={this.handleInputChange}
            />

            <TextInputHandle
              label="Colonia"
              placeholder="Colonia"
              keylabel="hood"
              onChangeText={this.handleInputChange}
            />

            <TextInputHandle
              label="Codigo Postal"
              placeholder="Codigo Postal"
              keylabel="cp"
              onChangeText={this.handleInputChange}
            />

            <TextInputHandle
              label="Correo electronico"
              placeholder="Correo electronico"
              keylabel="mail"
              onChangeText={this.handleInputChange}
            />

            <TextInputPass
              label="Contraseña"
              placeholder="Contraseña"
              keylabel="password"
              onChangeText={this.handleInputChange}
            />
            <View style={SignUpStyle.button}>
              <ButtonBlue Text="Crear Cuenta" onPress={this.createUser} />
            </View>
          </Formik>
        </ScrollView>
      </View>
    );
  }
}
export default SignUpScreen;
