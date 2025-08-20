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
import { Card } from "./components/Card";

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

  const filteredAttentances = attentances.filter(
    (item) => item.status === "pendente" || item.status === "finalizado"
  );

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
          renderItem={({ item }) => <Card data={item} />}
          onEndReached={() => {
            if (hasMore && !loading) loadMore();
          }}
          onEndReachedThreshold={0.5}
          ListFooterComponent={loading ? <ActivityIndicator /> : null}
          style={s.list}
        />
      </View>
    </View>
  );
}
