import { Text, View } from "react-native";
import { s } from "./styles";
import { useSnackbarContext } from "@/context/snackbar.context";
import { colors } from "@/theme";

export function Snackbar() {
  const { message, type } = useSnackbarContext();

  if (!message || !type) {
    return <></>;
  }

  const bgColor = type === "SUCCESS" ? colors.green[500] : colors.red[400];

  return (
    <View style={[s.container, { backgroundColor: bgColor }]}>
      <Text style={s.text}>{message}</Text>
    </View>
  );
}
