import { View, Text, ScrollView } from "react-native";
import { React, Component } from "react";
import { SignUpStyle } from "../themes/SignUpStyle";
import ButtonBlue from "../components/ButtonBlue";
import TextInputHandle from "../components/TextInputHandle";
import TextInputPass from "../components/TextInputPass";
import { TextInput } from "react-native-paper";

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
    console.log(key);
    this.setState((prevState) => {
      return {
        ...prevState,
        [key]: value,
      };
    });
  }

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
            <ButtonBlue
              Text="Crear Cuenta"
              onPress={() => {
                this.props.navigation.navigate("Login");
              }}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default SignUpScreen;
