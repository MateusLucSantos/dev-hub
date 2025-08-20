import { colors, fontFamily } from "@/theme";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    padding: 10,
    borderWidth: 1,
    borderColor: colors.gray[600],
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 6,
  },
  text: {
    fontFamily: fontFamily.medium,
    letterSpacing: 1,
    color: colors.gray[800],
    paddingBottom: 4,
  },
  subText: {
    fontSize: 12,
    color: colors.gray[700],
  },
});
