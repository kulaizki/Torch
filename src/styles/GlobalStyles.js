import { StyleSheet } from "react-native";

export const Colors = {
  dark1: "#212121",
  dark2: "#353535",
  dark3: "#141414",
  subtext: "#9E9E9E",
  orange: "#FFA800",
  blue: "#3D5CFF",
};

export const GlobalStyles = StyleSheet.create({
  centerView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  centerTopView: {
    flex: 1,
    alignItems: "center",
  },
  whiteDivider: {
    backgroundColor: Colors.light,
  },
  articleImage: {
    width: "100%",
    flex: 1,
    resizeMode: "contain",
  },
});
