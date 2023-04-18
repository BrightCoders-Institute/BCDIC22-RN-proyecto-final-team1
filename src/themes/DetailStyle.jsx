import { StyleSheet } from "react-native";
import { COLORS } from "./colors";
import { FWEIGHT } from "./fweight";

export const DetailStyle = StyleSheet.create({
  containerDetails: {
    backgroundColor: COLORS.DARK_BLUE,
    width: "100%",
    height: "100%",
  },
  customMap: {
    height: 300,
    width: "100%",
    backgroundColor: COLORS.DARK_BLUE,
  },
  containerArrow: { position: "absolute", top: 40, zIndex: 100 },
  containerInfo: { alignSelf: "center" },
  containerDirection: { flexDirection: "row", marginTop: 20 },
  textDetail: {
    color: "white",
    fontSize: 20,
    fontWeight: FWEIGHT.STRONG,
    marginTop: 10,
  },
  dividerPhoto: {
    backgroundColor: COLORS.WHITE,
    height: 1,
    width: "67%",
    marginLeft: 10,
    marginTop: 27,
  },
  containerImg: {
    width: 300,
    height: 200,
    marginLeft: 30,
    marginTop: 20,
    marginBottom: 20,
  },
  img: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    marginTop: 20,
  },
  containerDesc: {
    flexDirection: "row",
    marginTop: 27,
    marginTop: 20,
    marginBottom: 20,
  },
  textDesc: {
    color: "white",
    fontSize: 20,
    fontWeight: FWEIGHT.STRONG,
    marginTop: 10,
  },
  dividerDesc: {
    backgroundColor: COLORS.WHITE,
    height: 1,
    width: "63%",
    marginLeft: 10,
    marginTop: 27,
  },
  containerDescDetails: {
    width: 300,
    height: 200,
    marginLeft: 30,
    fontSize: 25,
  },
  textDescDetails: {
    color: "white",
    marginTop: 10,
    fontSize: 17,
    textAlign: "justify",
  },
  containerDate: { flexDirection: "row" },
  textDate: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 5,
  },
  dividerDate: {
    backgroundColor: COLORS.WHITE,
    height: 1,
    width: "76%",
    marginLeft: 10,
    marginTop: 20,
  },
  containerDateDetails: { width: 300, height: 200, marginLeft: 30 },
  textDateDetails: {
    color: COLORS.WHITE,
    marginTop: 80,
    alignSelf: "center",
    fontSize: 20,

  },
});
