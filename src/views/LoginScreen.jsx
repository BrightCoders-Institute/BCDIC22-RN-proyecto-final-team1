import { Text, View } from "react-native";
import React, { Component } from "react";
import ButtonBlue from "../components/ButtonBlue";
import { TextInput } from "react-native-paper";
import { LoginScreenStyle } from "../themes/LoginStyle";
import { COLORS } from "../themes/colors";
import TextInputHandle from "../components/TextInputHandle";
import TextInputPass from "../components/TextInputPass";
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
    this.setState({ inputValueMail: value });
    console.log(value);
  }

  handleInputChangePassword(value) {
    this.setState({ inputValuePassword: value });
    console.log(value);
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
              onPress={() => {
                this.props.navigation.navigate("MyDrawer");
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default LoginScreen;
