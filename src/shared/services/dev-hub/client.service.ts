import { devHubApi } from "@/shared/api/dev-hub";
import { AppError } from "@/shared/helpers/AppError";
import {
  EditClienteParams,
  EditClienteResponse,
} from "@/shared/interfaces/https/edit-client";
import {
  GetClientsParams,
  GetClientResponse,
} from "@/shared/interfaces/https/get-client";
import qs from "qs";

export async function getAllClients(
  params: GetClientsParams
): Promise<GetClientResponse> {
  const query = qs.stringify(
    {
      pagina: params.pagina,
      itens_por_pagina: params.itens_por_pagina,
      data_inicio: "",
      data_fim: "",
      cancelado: "",
      possui_pacote: "",
      codigo_pacote: "",
      servico_status: "",
      relacoes: "",
      grupo_cliente_servico: "",
      aguardando_migracao: "",
    },
    { encode: false }
  );

  try {
    const { data } = await devHubApi.get<GetClientResponse>(
      `/api/v1/integracao/cliente/todos?${query}`
    );

    return data;
  } catch (error: any) {
    throw error;
  }
}

export async function editClientById(
  id: number,
  clientData: EditClienteParams
): Promise<EditClienteResponse> {
  try {
    const { data } = await devHubApi.put<EditClienteResponse>(
      `/api/v1/integracao/cliente/cadastro/${id}`,
      clientData
    );

    return data;
  } catch (erro) {
    throw new AppError("Erro ao atualizar cliente.");
  }
}
