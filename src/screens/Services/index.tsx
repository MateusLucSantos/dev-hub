import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  TouchableWithoutFeedback,
} from "react-native";
import { s } from "./styles";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useBottomSheetContext } from "@/context/bottomsheet.context";
import { Filter } from "./components/Filters";
import { useAttentanceContext } from "@/context/attentance.context";
import { InputSearch } from "./components/InputSearch";
import { Header } from "@/components/Header";
import { useDebounce } from "@/shared/hooks/useDebounce";
import { useEffect, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";
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

  useFocusEffect(
    useCallback(() => {
      setTermoBusca("");
      setBusca("");

      return () => {
        setTermoBusca("");
        setBusca("");
      };
    }, [setTermoBusca, setBusca])
  );

  useEffect(() => {}, [debouncedTermoBusca]);

  const handleScreenPress = () => {
    setTermoBusca("");

    setBusca("");
  };

  return (
    <TouchableWithoutFeedback onPress={handleScreenPress}>
      <View style={s.container}>
        <Header goBack />
        <View style={s.content}>
          <TouchableWithoutFeedback onPress={() => {}}>
            <View style={s.filter}>
              <InputSearch
                label="Busque pelo termo"
                value={termoBusca}
                onChangeText={setTermoBusca}
              />
              <TouchableOpacity
                onPress={() =>
                  openBottomSheet(<Filter setBusca={setBusca} />, 1)
                }
              >
                <MaterialCommunityIcons
                  name="filter"
                  size={30}
                  style={s.icon}
                />
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>

          {error && <Text style={{ color: colors.red[400] }}>{error}</Text>}
          <TouchableWithoutFeedback onPress={() => {}}>
            <View style={s.list}>
              <FlatList
                data={attentances}
                keyExtractor={(item) => item.id_atendimento.toString()}
                renderItem={({ item }) => <Card data={item} />}
                onEndReached={() => {
                  if (hasMore && !loading) loadMore();
                }}
                onEndReachedThreshold={0.5}
                ListFooterComponent={loading ? <ActivityIndicator /> : null}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 60 }}
                ListEmptyComponent={
                  <Text style={s.textEmpty}>
                    Nenhum atendimento encontrado, selecione primeiro o filtro.
                  </Text>
                }
              />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
