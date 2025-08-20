import {
  Alert,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import { s } from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { IClient } from "@/shared/interfaces/clients/client.response";
import { useBottomSheetContext } from "@/context/bottomsheet.context";
import { EditClient } from "../EditClient";

type CardProps = TouchableOpacityProps & {
  data: IClient;
};

function CardComponent({ data, ...rest }: CardProps) {
  const { openBottomSheet } = useBottomSheetContext();

  return (
    <View style={s.container}>
      <View style={s.contentText}>
        <Text style={s.text} numberOfLines={1}>
          {data.nome_razaosocial || "Nome não informado."}
        </Text>
        <Text style={s.text} numberOfLines={1}>
          {data.telefone_primario || "Telefone não informado."}
        </Text>
      </View>

      <View style={s.iconButton}>
        <TouchableOpacity
          onPress={() =>
            openBottomSheet(<EditClient id={data.id_cliente} />, 1)
          }
          {...rest}
        >
          <MaterialCommunityIcons name="account-edit" size={36} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export const Card = React.memo(CardComponent);
