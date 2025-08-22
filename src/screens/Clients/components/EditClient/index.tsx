import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { s } from "./styles";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useBottomSheetContext } from "@/context/bottomsheet.context";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";
import { InputForm } from "@/components/InputForm";
import Checkbox from "expo-checkbox";
import { colors } from "@/theme";
import { Button } from "@/components/Button";
import { IClient } from "@/shared/interfaces/clients/client.response";
import { EditClienteParams } from "@/shared/interfaces/https/edit-client";
import { useClientContext } from "@/context/client.context";
import { useErrorHandler } from "@/shared/hooks/useErrorHandler";
import { DismissKeyboardView } from "@/components/DismissKeyboardView";

type EditClientProps = {
  cliente: IClient;
  id_cliente: number;
};

export function EditClient({ cliente, id_cliente }: EditClientProps) {
  const { closeBottomSheet } = useBottomSheetContext();
  const { editClient } = useClientContext();
  const { handleError } = useErrorHandler();

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<EditClienteParams>({
    defaultValues: {
      tipo_pessoa: cliente?.tipo_pessoa || "",
      ativo: cliente?.ativo,
      nome_razaosocial: cliente?.nome_razaosocial || "",
      cpf_cnpj: cliente?.cpf_cnpj || "",
      telefone_primario: cliente?.telefone_primario || "",
    },
    resolver: yupResolver(schema),
  });

  async function handleSaveClient(data: EditClienteParams) {
    try {
      await editClient(id_cliente, data);
      closeBottomSheet();
    } catch (error) {
      handleError(error, "Erro ao salvar cliente");
    }
  }

  function handleCloseBottom() {
    closeBottomSheet();
  }

  return (
    <DismissKeyboardView>
      <View style={s.container}>
        <View style={s.header}>
          <Text style={s.textHeader}>Editar cliente</Text>
          <TouchableOpacity onPress={handleCloseBottom}>
            <MaterialCommunityIcons name="close" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View style={s.content}>
          <InputForm
            control={control}
            name="nome_razaosocial"
            label="Nome / Razão Social *"
            placeholder="Informe o nome ou razão social"
          />
          <InputForm
            control={control}
            name="cpf_cnpj"
            label="CPF / CNPJ *"
            placeholder="Informe o CPF ou CNPJ"
          />
          <View style={s.telefoneTipo}>
            <View style={{ width: "70%" }}>
              <InputForm
                control={control}
                name="telefone_primario"
                label="Telefone"
                placeholder="Telefone para contato"
              />
            </View>
            <View style={{ width: "30%" }}>
              <InputForm
                control={control}
                name="tipo_pessoa"
                label="Tipo"
                placeholder="PF ou PJ"
              />
            </View>
          </View>
          <View style={s.isAtivo}>
            <Controller
              control={control}
              name="ativo"
              render={({ field: { value, onChange } }) => (
                <Checkbox
                  value={value}
                  onValueChange={onChange}
                  color={colors.blue[600]}
                />
              )}
            />
            <Text style={s.textIsAtivo}>Ativo</Text>
          </View>
        </View>
        <View style={s.containerButton}>
          <View style={{ width: "50%" }}>
            <Button
              title="Cancelar"
              mode="outline"
              onPress={handleCloseBottom}
            />
          </View>
          <View style={{ width: "50%" }}>
            <Button
              title="Salvar"
              disabled={isSubmitting}
              onPress={handleSubmit(handleSaveClient)}
            />
          </View>
        </View>
      </View>
    </DismissKeyboardView>
  );
}
