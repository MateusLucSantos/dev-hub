import { colors } from "@/theme";
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
  filter: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    top: 10,
    right: 10,
  },
  list: {
    flex: 1,
    marginTop: 10,
    marginVertical: 10,
  },
});
