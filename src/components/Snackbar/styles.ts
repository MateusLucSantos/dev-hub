import { colors, fontFamily } from "@/theme";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: "7%",
    alignSelf: "center",
    justifyContent: "center",
    marginLeft: 10,
    paddingLeft: 20,
    width: "90%",
    height: 50,
    borderRadius: 10,
  },
  text: {
    color: colors.white,
    fontSize: 14,
    fontFamily: fontFamily.medium,
    letterSpacing: 1,
  },
});
