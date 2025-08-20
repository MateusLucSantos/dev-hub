import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Checkbox from "expo-checkbox";
import { s } from "./styles";
import { colors } from "@/theme";
import { useBottomSheetContext } from "@/context/bottomsheet.context";

type FilterProps = {
  setBusca: (value: string) => void;
};

interface FilterOption {
  label: string;
  value: string;
}

const options: FilterOption[] = [
  { label: "Código Cliente", value: "codigo_cliente" },
  { label: "CPF/CNPJ", value: "cpf_cnpj" },
  { label: "ID Cliente Serviço", value: "id_cliente_servico" },
  { label: "Protocolo", value: "protocolo" },
];

export function Filter({ setBusca }: FilterProps) {
  const [buscaOption, setBuscaOption] = useState("");
  const { closeBottomSheet } = useBottomSheetContext();

  const onSelectOption = (value: string) => {
    const newValue = buscaOption === value ? "" : value;
    setBuscaOption(newValue);
    setBusca(newValue);
    if (newValue) {
      setTimeout(() => {
        closeBottomSheet();
      }, 200);
    }
  };

  return (
    <View style={s.container}>
      <Text style={s.title}>Filtrar por:</Text>
      {options.map((item) => (
        <TouchableOpacity
          key={item.value}
          style={s.optionContainer}
          onPress={() => onSelectOption(item.value)}
        >
          <Checkbox
            value={buscaOption === item.value}
            onValueChange={() => onSelectOption(item.value)}
            color={colors.blue[600]}
          />
          <Text style={s.optionLabel}>{item.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
