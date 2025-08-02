import { colors, fontFamily } from "@/theme";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 250,
    height: 250,
    marginLeft: 30,
  },
  text: {
    fontSize: 42,
    fontFamily: fontFamily.medium,
    color: colors.gray[700],
    marginBottom: 10,
    marginRight: 10,
  },
});
