import { StyleSheet } from "react-native";
import { COLORS } from "./colors";
import { FWEIGHT } from "./fweight";

export const Button = StyleSheet.create({
  ButtonBlue: {
    width: 300,
    height: 50,
    backgroundColor: COLORS.LIGHT_BLUE,
    borderRadius: 10,
  },
  textWhite: {
    alignSelf: "center",
    marginTop: 10,
    fontSize: 20,
    fontWeight: FWEIGHT.BOLD,
    color: COLORS.WHITE,
  },
  ButtonWhite: {
    width: 300,
    height: 50,
    backgroundColor: COLORS.WHITE,
    borderRadius: 10,
  },
  textDark: {
    alignSelf: "center",
    marginTop: 10,
    fontSize: 20,
    fontWeight: FWEIGHT.BOLD,
  },
});
