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
  },
  searh: {
    height: 40,
    marginTop: 20,
  },
  list: {
    flex: 1,
    marginTop: 10,
    paddingHorizontal: 10,
    marginBottom: 50,
    paddingBottom: 20,
  },
});
