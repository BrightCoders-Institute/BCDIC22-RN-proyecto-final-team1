import { Text, View, Alert } from "react-native";
import React, { Component } from "react";
import ButtonBlue from "../components/ButtonBlue";
import { LoginScreenStyle } from "../themes/LoginStyle";
import TextInputHandle from "../components/TextInputHandle";
import TextInputPass from "../components/TextInputPass";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../api/firebase'
export class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValueMail: "",
      inputValuePassword: "",
    };
    this.handleInputChangeMail = this.handleInputChangeMail.bind(this);
    this.handleInputChangePassword = this.handleInputChangePassword.bind(this);
  }

  handleInputChangeMail(value) {
    this.setState({...this.props.state, inputValueMail: value });
  }

  handleInputChangePassword(value) {
    this.setState({...this.props.state, inputValuePassword: value });
  }

  signIn() {
    signInWithEmailAndPassword(
      auth,
      this.state.inputValueMail,
      this.state.inputValuePassword
    )
      .then((res) => {
        this.props.navigation.navigate("MyDrawer");
        this.setState({ inputValueMail: "", inputValuePassword: "" });
      })
      .catch((error) => {
        switch (error.code) {
          case "auth/user-not-found":
            Alert.alert("Email no registrado");
            break;
          case "auth/wrong-password":
            Alert.alert("Contrasena Incorrecta");
            break;
          default:
            Alert.alert("Email o contrasena invalida");
            break;
        }
      });
  }

  render() {
    return (
      <View style={LoginScreenStyle.LoginStyle}>
        <Text style={LoginScreenStyle.Text}>Iniciar Sesión</Text>
        <View style={LoginScreenStyle.LoginContainer}>
          <TextInputHandle
            label="Correo electronico"
            placeholder="example@gmail.com"
            onChangeText={this.handleInputChangeMail}
          />
          <TextInputPass
            label="Contraseña"
            placeholder="Contraseña"
            keylabel="inputValuePassword"
            onChangeText={this.handleInputChangePassword}
          />
          <View View style={LoginScreenStyle.buttonSession}>
            <ButtonBlue
              Text="Iniciar sesion"
              onPress={() => this.signIn()}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default LoginScreen;
