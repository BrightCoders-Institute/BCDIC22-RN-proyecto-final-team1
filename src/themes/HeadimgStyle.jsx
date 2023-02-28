import { StyleSheet } from "react-native";
import { FWEIGHT } from "./fweight";
import { COLORS } from "./colors";

export const HeadCompStyle = StyleSheet.create({
  View: {
    width: "100%",
    height: 250,
  },
  Img: { width: "100%", height: "100%", borderRadius: 20, marginTop: -20 },
  Text: {
    alignSelf: "center",
    position: "absolute",
    top: 80,
    color: COLORS.WHITE,
    fontSize: 50,
    fontWeight: FWEIGHT.BOLD,
    textalign: "center",
    textShadowColor: "#000",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
});
