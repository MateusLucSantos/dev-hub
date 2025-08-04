import { Header } from "@/components/Header";
import { FlatList, Text, View } from "react-native";
import { s } from "./styles";
import { InputSearch } from "@/components/InputSearch";

export function Service() {
  return (
    <View style={s.container}>
      <Header goBack />
      <View style={s.content}>
        <InputSearch label="Busque pelo Nome do Cliente" />
        <View style={s.list}>
          <FlatList
            data={[]}
            keyExtractor={(item) => item}
            renderItem={() => <Text>teste</Text>}
          />
        </View>
      </View>
    </View>
  );
}
