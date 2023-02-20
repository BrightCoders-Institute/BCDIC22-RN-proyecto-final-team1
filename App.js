import { StyleSheet, View } from "react-native";
import React from "react";
import { TextInput } from 'react-native-paper';
import StartupScreen from "./src/views/StartupScreen";

export default function App() {
  return (
    <StartupScreen />
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
