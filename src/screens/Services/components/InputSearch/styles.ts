import { colors, fontFamily } from "@/theme";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  search: {
    flex: 1,
    margin: 10,
    marginBottom: 0,
    height: 36,
  },
  contentSearch: {
    flexDirection: "row",
    alignItems: "center",
  },
  textSearch: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.gray[700],
    borderRadius: 10,
    color: colors.gray[600],
    fontFamily: fontFamily.regular,
    fontSize: 14,
    letterSpacing: 1,
    paddingLeft: 10,
  },
  icon: {
    position: "absolute",
    right: 10,
    color: colors.gray[600],
  },
});
