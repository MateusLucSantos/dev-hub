import { colors } from "@/theme";
import { MaterialIcons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { s } from "./styles";
import { PropsWithChildren } from "react";

export function ErrorMessage({ children }: PropsWithChildren) {
  return (
    <View style={s.container}>
      <MaterialIcons
        name="error-outline"
        size={16}
        color={colors.red[400]}
        style={s.icon}
      />
      <Text style={s.message}>{children}</Text>
    </View>
  );
}
