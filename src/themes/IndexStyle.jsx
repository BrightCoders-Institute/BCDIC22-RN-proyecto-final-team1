import { StyleSheet } from "react-native";
import { FWEIGHT } from "./fweight";
import { COLORS } from "./colors";

export const indexStyle = StyleSheet.create({
  containerHeader: {
    marginLeft: 15,
  },
  containerLogo: {
    flexDirection: "row",
    display: "flex",
  },
  imgLogo: {
    width: 35,
    height: 150,
    resizeMode: "contain",
    marginLeft: 7,
  },
  textLogo: {
    marginLeft: 10,
    fontWeight: FWEIGHT.BOLD,
    fontSize: 25,
    marginTop: 55,
  },
  textUser: {
    marginTop: 35,
    marginLeft: 10,
  },
  containerDrawer: {
    marginLeft: 15,
    marginTop: 40,
    marginRight: 15,
  },
  containerLogout: {
    marginTop: 200,
  },
  drawerText: {
    color: COLORS.BLACK,
    fontWeight: FWEIGHT.BOLD,
    fontSize: 18,
  },
  dtextStyle: {
    fontSize: 18,
    fontWeight: FWEIGHT.BOLD,
  },
  dtextContainer: {
    paddingLeft: 5,
    marginTop: -30,
  },
});
