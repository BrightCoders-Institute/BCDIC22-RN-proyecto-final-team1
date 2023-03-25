import { StyleSheet } from "react-native";
import { COLORS } from "./colors";
import { FWEIGHT } from "./fweight";

export const StartupStyle = StyleSheet.create({
  StartupScreen: {
    width: "100%",
    height: "100%",
    backgroundColor: COLORS.DARK_BLUE,
  },
  Image: {
    width: 200,
    height: 200,
    alignSelf: "center",
    marginTop: 100,
  },
  Text: {
    alignSelf: "center",
    marginTop: 20,
    fontSize: 40,
    fontWeight: FWEIGHT.BOLD,
    color: COLORS.WHITE,
  },
  ButtonContainer: {
    marginTop: 200,
    marginLeft: 50,
  },
  Buttonspace: {
    marginTop: 20,
  },
});
