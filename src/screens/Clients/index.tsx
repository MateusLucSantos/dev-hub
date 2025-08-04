import { Header } from "@/components/Header";
import { FlatList, RefreshControl, Text, View } from "react-native";
import { s } from "./styles";
import { InputSearch } from "@/components/InputSearch";
import { useClientContext } from "@/context/client.context";
import { useEffect, useState } from "react";
import { Card } from "@/components/Card";
import { colors } from "@/theme";

export function Client() {
  const { clients, loading, fetchClients, refresh, loadMoreClients } =
    useClientContext();

  useEffect(() => {
    (async () => {
      await fetchClients({ pagina: 0 });
    })();
  }, []);

  return (
    <View style={s.container}>
      <Header goBack />
      <View style={s.content}>
        <InputSearch label="Busque por Nome, CPF ou CNPJ" />
        <View style={s.list}>
          <FlatList
            data={clients}
            keyExtractor={(item) => item.uuid_cliente}
            renderItem={({ item }) => (
              <Card
                name={item.nome_razaosocial}
                phone={item.telefone_primario}
              />
            )}
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl refreshing={loading} onRefresh={refresh} />
            }
            onEndReached={loadMoreClients}
          />
        </View>
      </View>
    </View>
  );
}
