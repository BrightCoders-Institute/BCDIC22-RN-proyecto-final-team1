import { View, Text, ScrollView } from "react-native";
import React from "react";
import { TextInput } from "react-native-paper";
import { RegisterStyle } from "../themes/RegisterStyle";
import ButtonBlue from '../components/ButtonBlue'
import { COLORS } from "../themes/colors";

const RegisterScreen = () => {
  return (
    <View style={RegisterStyle.container}>
      <ScrollView style={ RegisterStyle.scroll}>
        <Text style={RegisterStyle.title}>Registrarse</Text>
        <TextInput
          mode="outlined"
          label="Nombre Completo"
          placeholder="Nombre"
          outlineColor= {COLORS.LIGHT_BLUE}
          activeOutlineColor={COLORS.LIGHT_BLUE}
          style={RegisterStyle.input}
          textColor={ COLORS.WHITE}
          placeholderTextColor={ COLORS.WHITE}
        />

        <TextInput
          mode="outlined"
          label="Colonia"
          placeholder="Colonia"
          outlineColor= {COLORS.LIGHT_BLUE}
          activeOutlineColor={COLORS.LIGHT_BLUE}
          style={RegisterStyle.input}
          textColor={ COLORS.WHITE}
          placeholderTextColor={ COLORS.WHITE}
        />

        <TextInput
          mode="outlined"
          label="Codigo Postal"
          placeholder="Codigo Postal"
          outlineColor= {COLORS.LIGHT_BLUE}
          activeOutlineColor={COLORS.LIGHT_BLUE}
          style={RegisterStyle.input}
          textColor={ COLORS.WHITE}
          placeholderTextColor={ COLORS.WHITE}
        />

        <TextInput
          mode="outlined"
          label="Correo electronico"
          placeholder="Correo electronico"
          outlineColor= {COLORS.LIGHT_BLUE}
          activeOutlineColor={COLORS.LIGHT_BLUE}
          style={RegisterStyle.input}
          textColor={ COLORS.WHITE}
          placeholderTextColor={ COLORS.WHITE}
        />

        <TextInput
          mode="outlined"
          label="Contrasena"
          placeholder="Contrasena"
          outlineColor= {COLORS.LIGHT_BLUE}
          activeOutlineColor={COLORS.LIGHT_BLUE}
          style={RegisterStyle.input}
          textColor={ COLORS.WHITE}
          placeholderTextColor={ COLORS.WHITE}
        />
        <View style={ RegisterStyle.button}>
          <ButtonBlue Text='Crear Cuenta' />
        </View>

      </ScrollView>
    </View>
  );
};

export default RegisterScreen;
