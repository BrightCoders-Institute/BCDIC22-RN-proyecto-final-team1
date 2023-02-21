import { StyleSheet } from "react-native";
import { COLORS } from "./colors";
import { FWEIGHT } from "./fweight";

export const WelcomeStyle = StyleSheet.create({
  WelcomeScreen: { width: "100%", height: "100%", backgroundColor: COLORS.DARK_BLUE },
  Text: {
    textAlign: "center",
    alignSelf: "center",
    marginTop: 125,
    fontSize: 40,
    fontWeight: FWEIGHT.BOLD,
    color: COLORS.WHITE,
  },
  LogoImg: {
    width: 200,
    height: 200,
    alignSelf: "center",
    marginTop: 55,
  },
  Button: {
    width: 70,
    height: 70,
    alignSelf: "center",
    marginTop: 110,
    transform: [{ rotate: "180deg" }],
  },
});
