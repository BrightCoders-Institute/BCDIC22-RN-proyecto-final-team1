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
        email: "",
        password: "",
      },
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChangeName(formikProps, text) {
    formikProps.setFieldValue("name", text);
  }
  handleInputChangeHood(formikProps, text) {
    formikProps.setFieldValue("hood", text);
  }
  handleInputChangeCp(formikProps, text) {
    formikProps.setFieldValue("cp", text);
  }
  handleInputChangeMail(formikProps, text) {
    formikProps.setFieldValue("email", text);
  }
  handleInputChangePassword(formikProps, text) {
    formikProps.setFieldValue("password", text);
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
    if (this.state.email === "" && this.state.password === "") {
      Alert.alert("Ingresar todos los datos necesarios!");
    }
    createUserWithEmailAndPassword(auth, this.state.email, this.state.password)
      .then(async (res) => {
        console.log(res);
        await createProfile(
          res.user.uid,
          this.state.email,
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
          <Formik
            initialValues={this.state.formikProps}
            onSubmit={(values, formikHelpers) => {
              formikHelpers.resetForm();
            }}
            validate={(values) => {
              const emailValidRegex =
                /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
              const regexHood = /^[a-zA-Z]{4,20}$/;
              const regex = /^[0-9]{5}$/;
              const errors = {};
              if (!values.name) {
                errors.name = "Por favor, introduce un nombre";
              } else if (values.name.length < 30) {
                errors.name = "El nombre debe contener al menos 30 letras";
              }
              if (!values.hood) {
                errors.hood = "Por favor, introduce tu locación";
              } else if (!values.hood.match(regexHood) ? true : false) {
                errors.hood =
                  "La colonia debe tener al menos 4 letras y maximo 20";
              }
              if (!values.cp) {
                errors.cp = "Por favor, introduce un código postal válido";
              } else if (!values.cp.match(regex) ? true : false) {
                errors.cp = "Utiliza los 5 números del código postal";
              }

              if (!values.email) {
                errors.email = "Por favor, ingrese un correo electrónico";
              } else if (errors.email == "auth/invalid-email") {
                errors.email = "Texto para indicar que pongas tu mail";
              } else if (
                !(values.email.match(emailValidRegex) ? true : false)
              ) {
                errors.email = "Dirección de correo electrónico inválida";
              }
              if (!values.password) {
                errors.password = "Por favor, ingrese una contraseña";
              } else if (values.password.length < 8) {
                errors.password =
                  "La contraseña debe tener al menos 8 caracteres";
              }

              return errors;
            }}
          >
            {(formikProps) => (
              <View>
                <TextInputHandle
                  label="Nombre Completo"
                  placeholder="Nombre"
                  keylabel="name"
                  onChangeText={(text) =>
                    this.handleInputChangeName(formikProps, text)
                  }
                  value={formikProps.values.name}
                  error={formikProps.errors.name}
                />

                <TextInputHandle
                  label="Colonia"
                  placeholder="Colonia"
                  keylabel="hood"
                  onChangeText={(text) =>
                    this.handleInputChangeHood(formikProps, text)
                  }
                  value={formikProps.values.hood}
                  error={formikProps.errors.hood}
                />

                <TextInputHandle
                  label="Código Postal"
                  placeholder="Código Postal"
                  keylabel="cp"
                  onChangeText={(text) =>
                    this.handleInputChangeCp(formikProps, text)
                  }
                  value={formikProps.values.cp}
                  error={formikProps.errors.cp}
                />

                <TextInputHandle
                  label="Correo electronico"
                  placeholder="Correo electronico"
                  keylabel="mail"
                  onChangeText={(text) =>
                    this.handleInputChangeMail(formikProps, text)
                  }
                  value={formikProps.values.email}
                  error={formikProps.errors.email}
                />

                <TextInputPass
                  label="Contraseña"
                  placeholder="Contraseña"
                  keylabel="password"
                  onChangeText={(text) =>
                    this.handleInputChangePassword(formikProps, text)
                  }
                  value={formikProps.values.password}
                  error={formikProps.errors.password}
                />
                <View style={SignUpStyle.button}>
                  <ButtonBlue Text="Crear Cuenta" onPress={this.createUser} />
                </View>
              </View>
            )}
          </Formik>
        </ScrollView>
      </View>
    );
  }
}
export default SignUpScreen;
