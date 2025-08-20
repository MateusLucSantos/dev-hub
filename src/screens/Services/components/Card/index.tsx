import { Text, View } from "react-native";
import { s } from "./styles";
import { GetAttentanceResponse } from "@/shared/interfaces/attentances/attentance.response";
import { fontFamily } from "@/theme";

type CardProps = {
  data: GetAttentanceResponse;
};

export function Card({ data }: CardProps) {
  return (
    <View style={s.container}>
      <Text style={[s.text, { fontFamily: fontFamily.bold }]}>
        Nome: {data.cliente.nome_razaosocial}
      </Text>
      <Text style={[s.text, s.subText]}>CPF/CNPJ: {data.cliente.cpf_cnpj}</Text>
      <Text style={[s.text, s.subText]}>Status: {data.status}</Text>
      <Text style={[s.text, s.subText]}>
        Descrição: {data.descricao_abertura}
      </Text>
      {/* <Text>
        Data abertura: {new Date(data.data_cadastro).toLocaleDateString()}
      </Text> */}
    </View>
  );
}
