import { colors, fontFamily } from "@/theme";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 10,
    marginTop: 15,
  },
  label: {
    fontSize: 14,
    fontFamily: fontFamily.medium,
    paddingBottom: 4,
    marginLeft: 4,
    letterSpacing: 2,
  },
  textIput: {
    fontSize: 14,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 6,
    letterSpacing: 1,
    fontFamily: fontFamily.regular,
  },
  icon: {
    flex: 1,
    position: "absolute",
    right: 10,
  },
});
