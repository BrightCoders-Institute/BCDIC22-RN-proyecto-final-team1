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
  ButtonGreen: {
    width: 200,
    height: 60,
    backgroundColor: COLORS.GREEN,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    alignContent: "center",
  },
  ButtonGreenText: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: FWEIGHT.BOLD,
    color: COLORS.WHITE,
  },
  ButtonGreenContainer: {
    alignSelf: "center",
    bottom: 80,
  },
  ButtonGreenStyleIcon: {
    bottom: 10,
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
