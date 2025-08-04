import { Header } from "@/components/Header";
import { FlatList, Text, View } from "react-native";
import { s } from "./styles";
import { InputSearch } from "@/components/InputSearch";
import { useClientContext } from "@/context/client.context";
import { useEffect } from "react";
import { Card } from "@/components/Card";

export function Client() {
  const { fetchClients, clients } = useClientContext();
  useEffect(() => {
    (async () => {
      await fetchClients();
    })();
  });

  return (
    <View style={s.container}>
      <Header goBack />
      <View style={s.content}>
        <InputSearch label="Busque por Nome, CPF ou CNPJ" />
        <View style={s.list}>
          <FlatList
            data={clients}
            keyExtractor={(item) => item.id_cliente.toString()}
            renderItem={({ item }) => (
              <Card
                name={item.nome_razaosocial}
                phone={item.telefone_primario}
              />
            )}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </View>
  );
}
