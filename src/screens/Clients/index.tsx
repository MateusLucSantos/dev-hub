import { Header } from "@/components/Header";
import { FlatList, RefreshControl, Text, View } from "react-native";
import { s } from "./styles";
import { InputSearch } from "@/components/InputSearch";
import { useClientContext } from "@/context/client.context";
import { useEffect, useMemo, useState } from "react";
import { Card } from "@/screens/Clients/components/Card";
import { useErrorHandler } from "@/shared/hooks/useErrorHandler";

export function Client() {
  const { handleError } = useErrorHandler();
  const { clients, loading, fetchClients, refresh, loadMoreClients } =
    useClientContext();
  const [searchClient, setSearchClient] = useState("");

  useEffect(() => {
    (async () => {
      try {
        await fetchClients({ pagina: 0 });
      } catch (error) {
        handleError(error, "Falha ao buscar registros.");
      }
    })();
  }, []);

  const normalizeText = (text: string) => {
    return text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  };

  const removeFormatting = (text: string) => {
    return text.replace(/[.\-\/]/g, "");
  };

  const filteredClients = useMemo(() => {
    if (!searchClient || searchClient.trim() === "") {
      return clients;
    }

    const searchTerm = searchClient.trim();
    const normalizedSearchTerm = normalizeText(searchTerm);
    const numbersOnlySearchTerm = removeFormatting(searchTerm);

    return clients.filter((client) => {
      if (client.nome_razaosocial) {
        const normalizedName = normalizeText(client.nome_razaosocial);
        if (normalizedName.includes(normalizedSearchTerm)) {
          return true;
        }
      }

      if (client.cpf_cnpj) {
        const cleanCpf = removeFormatting(client.cpf_cnpj);
        if (cleanCpf.includes(numbersOnlySearchTerm)) {
          return true;
        }
      }

      return false;
    });
  }, [clients, searchClient]);

  async function handleLoadMoreClients() {
    if (!searchClient || searchClient.trim() === "") {
      try {
        await loadMoreClients();
      } catch (error) {
        handleError(error, "Falha ao buscar registros");
      }
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
          <InputSearch
            label="Busque por Nome, CPF ou CNPJ"
            value={searchClient}
            onChangeText={setSearchClient}
          />
        </View>
        <View style={s.list}>
          <FlatList
            data={filteredClients}
            keyExtractor={(item) => item.uuid_cliente}
            renderItem={({ item }) => <Card data={item} />}
            initialNumToRender={10}
            windowSize={5}
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl refreshing={loading} onRefresh={handleRefresh} />
            }
            onEndReachedThreshold={0.5}
            onEndReached={handleLoadMoreClients}
            ListEmptyComponent={() => (
              <View style={{ padding: 20, alignItems: "center" }}>
                <Text>
                  {searchClient && searchClient.trim() !== ""
                    ? "Nenhum cliente encontrado com os critérios de busca."
                    : "Nenhum cliente cadastrado."}
                </Text>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
}
