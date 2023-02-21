import { StyleSheet } from "react-native";

export const WelcomeStyle = StyleSheet.create({
  WelcomeScreen: { width: "100%", height: "100%", backgroundColor: "#100F1F" },
  Text: {
    textAlign: "center",
    alignSelf: "center",
    marginTop: 60,
    fontSize: 35,
    fontWeight: "600",
    color: "white",
  },
  LogoImg: {
    width: 180,
    height: 180,
    alignSelf: "center",
    marginTop: 45,
  },
  Button: {
    width: 60,
    height: 60,
    alignSelf: "center",
    marginTop: 110,
    transform: [{ rotate: "180deg" }],
  },
});
