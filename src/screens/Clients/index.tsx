import { Header } from "@/components/Header";
import { FlatList, RefreshControl, Text, View } from "react-native";
import { s } from "./styles";
import { InputSearch } from "@/components/InputSearch";
import { useClientContext } from "@/context/client.context";
import { useEffect } from "react";
import { Card } from "@/components/Card";
import { useErrorHandler } from "@/shared/hooks/useErrorHandler";

export function Client() {
  const { handleError } = useErrorHandler();
  const { clients, loading, fetchClients, refresh, loadMoreClients } =
    useClientContext();

  useEffect(() => {
    (async () => {
      try {
        await fetchClients({ pagina: 0 });
      } catch (error) {
        handleError(error, "Falha ao buscar registros.");
      }
    })();
  }, []);

  async function handleLoadMoreClients() {
    try {
      await loadMoreClients();
    } catch (error) {
      handleError(error, "Falha ao buscar registros");
    }
  }

  async function handleRefresh() {
    try {
      await refresh();
    } catch (error) {
      handleError(error, "Falha ao buscar registros");
    }
  }

  return (
    <View style={s.container}>
      <Header goBack />
      <View style={s.content}>
        <View style={s.searh}>
          <InputSearch label="Busque por Nome, CPF ou CNPJ" />
        </View>
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
            initialNumToRender={10}
            windowSize={5}
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl refreshing={loading} onRefresh={handleRefresh} />
            }
            onEndReachedThreshold={0.5}
            onEndReached={handleLoadMoreClients}
          />
        </View>
      </View>
    </View>
  );
}
