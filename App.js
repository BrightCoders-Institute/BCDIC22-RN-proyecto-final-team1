import { StyleSheet, View } from "react-native";
import React from "react";
import { TextInput } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <TextInput
        label="Correo"
        placeholder="Correo Electronico"
        mode="outlined"
        width={300}
      />
      <TextInput
        label="Contraseña"
        placeholder="contraseña"
        mode="outlined"
        width={300}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  }
});
