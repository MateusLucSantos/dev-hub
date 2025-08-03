import { colors, fontFamily } from "@/theme";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue[900],
  },
  content: {
    flex: 1,
    marginTop: 4,
    backgroundColor: colors.gray[300],
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingTop: 60,
    paddingHorizontal: 26,
    gap: 10,
  },
  card: {
    gap: 6,
  },
  title: {
    fontFamily: fontFamily.medium,
    fontSize: 18,
    color: colors.blue[600],
    letterSpacing: 1,
  },
  text: {
    fontFamily: fontFamily.regular,
    color: colors.gray[700],
    letterSpacing: 1,
  },
});
