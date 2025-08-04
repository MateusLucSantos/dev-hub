import { devHubApi } from "@/shared/api/dev-hub";
import {
  GetClientsParams,
  GetClientResponse,
} from "@/shared/interfaces/https/get-client-request";
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
  } catch (error) {
    console.error("Erro ao buscar clientes:", error);
    throw error;
  }
}
