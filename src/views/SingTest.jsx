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
import * as Yup from "yup";

export class SignTest extends Component {
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
        formikProps: {
          ...prevState.formikProps,
          [key]: value,
        },
      };
    });
  }

  createUser = (values) => {
    const { mail, password, name, hood, cp } = values;
    if (mail === "" && password === "") {
      Alert.alert("Ingresar todos los datos necesarios!");
    }
    createUserWithEmailAndPassword(auth, mail, password)
      .then(async (res) => {
        console.log(res);
        await createProfile(res.user.uid, mail, name, hood, cp);
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
    const { formikProps } = this.state;

    return (
      <View style={SignUpStyle.container}>
        <ScrollView style={SignUpStyle.scroll}>
          <Text style={SignUpStyle.title}>Registrarse</Text>
          <Formik
            initialValues={formikProps}
            validationSchema={Yup.object().shape({
              name: Yup.string().required("Ingrese su nombre"),
              hood: Yup.string().required("Ingrese su colonia"),
              cp: Yup.string().required("Ingrese su código postal"),
              mail: Yup.string()
                .email("Ingrese un correo electrónico válido")
                .required("Ingrese su correo electrónico"),
              password: Yup.string()
                .min(6, "La contraseña debe tener al menos 6 caracteres")
                .required("Ingrese una contraseña"),
            })}
            onSubmit={(values) => this.createUser(values)}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <>
                <TextInputHandle
                  label="Nombre Completo"
                  placeholder="Nombre"
                  keylabel="name"
                  onChangeText={handleChange("name")}
                  onBlur={handleBlur("name")}
                  value={values.name}
                />
                <Text style={{ color: COLORS.RED }}>
                  {touched.name && errors.name}
                </Text>

                <TextInputHandle
                  label="Colonia"
                  placeholder="Colonia"
                  keylabel="hood"
                  onChangeText={handleChange("hood")}
                  onBlur={handleBlur("hood")}
                  value={values.hood}
                />
                <Text style={{ color: COLORS.RED }}>
                  {touched.hood && errors.hood}
                </Text>

                <TextInputHandle
                  label="Codigo Postal"
                  placeholder="Codigo Postal"
                  keylabel="cp"
                  onChangeText={handleChange("cp")}
                  onBlur={handleBlur("cp")}
                  value={values.cp}
                />
                <Text style={{ color: COLORS.RED }}>
                  {touched.cp && errors.cp}
                </Text>
                <TextInputHandle
                  label="Correo Electronico"
                  placeholder="Correo Electronico"
                  keylabel="mail"
                  onChangeText={handleChange("mail")}
                  onBlur={handleBlur("mail")}
                  value={values.mail}
                />
                <Text style={{ color: COLORS.RED }}>
                  {touched.mail && errors.mail}
                </Text>
                <TextInputPass
                  label="Contraseña"
                  placeholder="Contraseña"
                  keylabel="password"
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                />
                <Text style={{ color: COLORS.RED }}>
                  {touched.password && errors.password}
                </Text>
                <ButtonBlue title="Registrarse" onPress={handleSubmit} />
              </>
            )}
          </Formik>
        </ScrollView>
      </View>
    );
  }
}

export default SignTest;
