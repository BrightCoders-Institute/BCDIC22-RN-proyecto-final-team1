import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SignUpStyle } from "../themes/SignUpStyle";
import ButtonBlue from "../components/ButtonBlue";
import TextInputHandle from "../components/TextInputHandle";

const SignUpScreen = () => {
  return (
    <View style={SignUpStyle.container}>
      <ScrollView style={SignUpStyle.scroll}>
        <Text style={SignUpStyle.title}>Registrarse</Text>
        <TextInputHandle 
          label="Nombre Completo" 
          placeholder="Nombre" 
        />

        <TextInputHandle 
          label="Colonia" 
          placeholder="Colonia" 
        />

        <TextInputHandle 
          label="Codigo Postal" 
          placeholder="Codigo Postal" 
        />

        <TextInputHandle
          label="Correo electronico"
          placeholder="Correo electronico"
        />

        <TextInputHandle 
          label="Contrasena" 
          placeholder="Contrasena" 
        />

        <View style={SignUpStyle.button}>
          <ButtonBlue Text="Crear Cuenta" />
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUpScreen;
