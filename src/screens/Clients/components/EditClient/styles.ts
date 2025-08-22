// screens/Clients/components/EditClient/styles.ts
import { colors, fontFamily } from "@/theme";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
  },
  header: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 10,
  },
  textHeader: {
    fontFamily: fontFamily.medium,
    letterSpacing: 1,
    color: colors.gray[800],
    fontSize: 16,
  },
  content: {
    marginHorizontal: 10,
  },
  telefoneTipo: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  isAtivo: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    marginLeft: 15,
  },
  textIsAtivo: {
    fontFamily: fontFamily.medium,
    fontSize: 16,
    marginLeft: 10,
  },
  containerButton: {
    width: "90%",
    flexDirection: "row",
    gap: 4,
    marginTop: 50,
    marginLeft: 18,
    // marginRight: 40,
  },
});
