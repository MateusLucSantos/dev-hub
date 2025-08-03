import { colors, fontFamily } from "@/theme";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: 240,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: colors.gray[400],
    backgroundColor: colors.gray[200],
    borderRadius: 15,
    gap: 10,
  },
  icon: {
    color: colors.gray[600],
  },
  text: {
    fontFamily: fontFamily.regular,
    letterSpacing: 1,
    fontSize: 20,
    marginTop: 10,
    color: colors.gray[700],
  },
});
