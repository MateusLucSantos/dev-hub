import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { s } from "./styles";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useBottomSheetContext } from "@/context/bottomsheet.context";
import { Filter } from "./components/Filters";
import { useAttentanceContext } from "@/context/attentance.context";
import { InputSearch } from "./components/InputSearch";
import { Header } from "@/components/Header";
import { useDebounce } from "@/shared/hooks/useDebounce";
import { useEffect } from "react";
import { colors } from "@/theme";

export function Service() {
  const { openBottomSheet } = useBottomSheetContext();
  const {
    attentances,
    loading,
    error,
    hasMore,
    termoBusca,
    setTermoBusca,
    loadMore,
    setBusca,
  } = useAttentanceContext();

  const debouncedTermoBusca = useDebounce(termoBusca, 500);

  useEffect(() => {}, [debouncedTermoBusca]);

  return (
    <View style={s.container}>
      <Header goBack />
      <View style={s.content}>
        <View style={s.filter}>
          <InputSearch
            label="Busque pelo termo"
            value={termoBusca}
            onChangeText={setTermoBusca}
          />
          <TouchableOpacity
            onPress={() => openBottomSheet(<Filter setBusca={setBusca} />, 1)}
          >
            <MaterialCommunityIcons name="filter" size={30} style={s.icon} />
          </TouchableOpacity>
        </View>

        {error && <Text style={{ color: colors.red[400] }}>{error}</Text>}

        <FlatList
          data={attentances}
          keyExtractor={(item) => item.id_atendimento.toString()}
          renderItem={({ item }) => (
            <View
              style={{ padding: 10, borderBottomWidth: 1, borderColor: "#ccc" }}
            >
              <Text>Protocolo: {item.cliente.nome_razaosocial}</Text>
              <Text>Status: {item.status}</Text>
              <Text>Assunto: {item.descricao_abertura}</Text>
              <Text>Cliente: {item.cliente.nome_razaosocial}</Text>
              <Text>
                Data abertura:{" "}
                {new Date(item.data_cadastro).toLocaleDateString()}
              </Text>
            </View>
          )}
          onEndReached={() => {
            if (hasMore && !loading) loadMore();
          }}
          onEndReachedThreshold={0.5}
          ListFooterComponent={loading ? <ActivityIndicator /> : null}
        />
      </View>
    </View>
  );
}
