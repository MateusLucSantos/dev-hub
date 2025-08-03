import { Header } from "@/components/Header";
import { Text, View } from "react-native";
import { s } from "./styles";

export function Client() {
  return (
    <View style={s.container}>
      <Header goBack />
      <View style={s.content}></View>
    </View>
  );
}
