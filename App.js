import { StyleSheet, View } from "react-native";
import React from "react";
import { TextInput } from "react-native-paper";
import StartupScreen from "./src/views/StartupScreen";
import SignUpScreen from "./src/views/SignUpScreen";
import AddRecord from "./src/views/AddRecord";
import MyRecords from "./src/views/MyRecords";
import Details from "./src/views/Details";
import MyDrawer from "./src/navigation/index";
import ReportedDamages from "./src/views/ReportedDamages";

export default function App() {
  return <MyDrawer />;
}
