import { colors, fontFamily } from "@/theme";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue[900],
  },
  header: {
    height: 250,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    height: 150,
    width: 150,
  },
  logoText: {
    alignItems: "center",
    justifyContent: "center",
    fontSize: 28,
    fontFamily: fontFamily.bold,
    paddingHorizontal: 8,
    marginRight: 4,
    color: colors.gray[800],
  },
  title: {
    fontSize: 18,
    fontFamily: fontFamily.medium,
    letterSpacing: 2,
  },
  form: {
    flex: 1,
    marginTop: 4,
    backgroundColor: colors.gray[100],
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    alignItems: "center",
    padding: 10,
  },
  areaSubmit: {
    width: 200,
    marginTop: 35,
  },
});
