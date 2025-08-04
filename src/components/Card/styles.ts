import { colors, fontFamily } from "@/theme";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: colors.gray[400],
    height: 70,
    borderWidth: 1,
    borderColor: colors.gray[600],
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    justifyContent: "space-around",
    alignItems: "center",
    gap: 2,
  },
  client: {
    flex: 1,
    flexDirection: "row",
    paddingLeft: 10,
    gap: 2,
  },
  text: {
    fontFamily: fontFamily.regular,
    letterSpacing: 1,
  },
  contentText: {
    flex: 1,
    gap: 8,
    paddingLeft: 10,
  },
  iconButton: {
    flexDirection: "row",
    gap: 10,
    paddingRight: 5,
  },
});
