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
  filter: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    top: 5,
    right: 5,
  },
  list: {
    flex: 1,
    top: 5,
  },
  textEmpty: {
    width: "90%",
    textAlign: "center",
    fontFamily: fontFamily.medium,
    letterSpacing: 1,
    marginTop: 20,
    marginLeft: 15,
    flexWrap: "wrap",
    color: colors.gray[700],
  },
  emptyMessage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 40,
  },

  emptyMessageText: {
    fontSize: 16,
    color: colors.gray?.[600] || "#6B7280",
    textAlign: "center",
    marginTop: 12,
    lineHeight: 22,
  },
});
