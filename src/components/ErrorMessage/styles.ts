import { colors, fontFamily } from "@/theme";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    paddingTop: 2,
  },
  icon: {
    marginRight: 1,
  },
  message: {
    color: colors.red[400],
    fontSize: 14,
  },
});
