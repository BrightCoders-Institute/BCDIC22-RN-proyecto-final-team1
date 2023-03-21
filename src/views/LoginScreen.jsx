import { Text, View, Alert } from "react-native";
import React, { Component } from "react";
import ButtonBlue from "../components/ButtonBlue";
import { LoginScreenStyle } from "../themes/LoginStyle";
import TextInputHandle from "../components/TextInputHandle";
import TextInputPass from "../components/TextInputPass";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../api/firebase";
import { Formik } from "formik";
export class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formikProps: {
        email: "",
        password: "",
      },
    };
    this.handleInputChangeMail = this.handleInputChangeMail.bind(this);
    this.handleInputChangePassword = this.handleInputChangePassword.bind(this);
  }

  handleInputChangeMail(formikProps, text) {
    formikProps.setFieldValue("email", text);
  }

  handleInputChangePassword(formikProps, text) {
    formikProps.setFieldValue("password", text);
  }

  signIn(formikProps) {
    signInWithEmailAndPassword(
      auth,
      formikProps.values.email,
      formikProps.values.password
    )
      .then((res) => {
        this.props.navigation.navigate("MyDrawer");
        formikProps.resetForm();
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
        <Formik
          initialValues={this.state.formikProps}
          onSubmit={(values, formikHelpers) => {
            formikHelpers.resetForm();
          }}
        >
          {(formikProps) => (
            <View style={LoginScreenStyle.LoginContainer}>
              <TextInputHandle
                label="Correo electronico"
                placeholder="example@gmail.com"
                onChangeText={(text) =>
                  this.handleInputChangeMail(formikProps, text)
                }
                value={formikProps.values.email}
              />
              <TextInputPass
                label="Contraseña"
                placeholder="Contraseña"
                keylabel="inputValuePassword"
                onChangeText={(text) =>
                  this.handleInputChangePassword(formikProps, text)
                }
                value={formikProps.values.password}
              />
              <View View style={LoginScreenStyle.buttonSession}>
                <ButtonBlue
                  Text="Iniciar sesion"
                  onPress={() => {
                    formikProps.handleSubmit();
                    this.signIn(formikProps);
                  }}
                />
              </View>
            </View>
          )}
        </Formik>
      </View>
    );
  }
}

export default LoginScreen;
