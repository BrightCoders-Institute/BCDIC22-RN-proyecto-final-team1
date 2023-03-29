import { StyleSheet } from "react-native";
import { COLORS } from "./colors";

export const AddRecordStyle = StyleSheet.create({
  scroll: {
    width: "100%",
    height: "100%",
    backgroundColor: COLORS.DARK_BLUE,
  },
  view: { alignSelf: "center" },
  textInput: {
    width: 350,
    height: 150,
    backgroundColor: COLORS.DARK_BLUE,
    color: COLORS.WHITE,
    marginTop: 15,
  },
  addImage: {
    width: 350,
    height: 150,
    backgroundColor: COLORS.DARK_BLUE,
    marginTop: 20,
    borderRadius: 3,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: COLORS.WHITE,
  },
  text: { color: COLORS.WHITE },
  viewUbi: { display: "flex", flexDirection: "row", alignContent: "center" },
  textUbi: { color: COLORS.WHITE, marginTop: 20, fontSize: 21 },
  divider: {
    backgroundColor: COLORS.WHITE,
    marginTop: 40,
    height: 1,
    width: "67%",
    marginLeft: 10,
  },
  map: {
    width: 350,
    height: 200,
    marginTop: 20,
    borderRadius: 5,
    marginBottom: 20,
  },
  UploadImgContainer: {
    width: 350,
    height: 300,
    top: 10,
  },
  UploadImg: {
    width: "100%",
    height: "100%",
  },
  ButtonAdd: {
    alignSelf: "center",
    marginBottom: 100,
    top: 40,
  },
});
