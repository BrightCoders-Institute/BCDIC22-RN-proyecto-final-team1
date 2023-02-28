import { StyleSheet } from "react-native";
import { COLORS } from "./colors";
import { FWEIGHT } from "./fweight";

export const CardStyle = StyleSheet.create({
  topView: { width: 340, height: 200, marginLeft: 25 },
  bottomCard: {marginBottom:170},
  bottomView: {
    backgroundColor: COLORS.PURPLE,
    width: "100%",
    height: 130,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  headText: {
    fontSize: 20,
    fontWeight: FWEIGHT.STRONG,
    marginLeft: 10,
    marginTop: 10,
    color: COLORS.WHITE,
  },
  descText: {
    fontSize: 15,
    margin: 10,
    color: COLORS.WHITE,
    alignSelf: "center",
    textAlign: "center",
  },
  imgCard: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});
