import { colors, fontFamily } from "@/theme";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    width: "100%",
    height: 40,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  fill: { backgroundColor: colors.blue[600] },
  outline: {
    borderWidth: 1,
    borderColor: colors.gray[700],
  },

  textButton: {
    fontSize: 14,
    fontFamily: fontFamily.medium,
    color: colors.white,
    letterSpacing: 2,
  },
  textOutline: {
    color: colors.blue[600],
    fontSize: 14,
    fontFamily: fontFamily.medium,
  },
});
