import axios from "axios";

import { devHubApi } from "@/shared/api/dev-hub";
import qs from "qs";
import {
  GetAttentanceParams,
  GetAttentanceResponse,
} from "@/shared/interfaces/attentances/attentance.response";

export async function fetchAttentance(
  params: GetAttentanceParams & { page: number; limit: number }
): Promise<GetAttentanceResponse[]> {
  const query = qs.stringify({
    busca: params.busca,
    termo_busca: params.termo_busca,
  });

  try {
    const { data } = await devHubApi.get<GetAttentanceResponse[]>(
      `/api/v1/integracao/cliente/atendimento?${query}`
    );

    return data;
  } catch (error) {
    throw error;
  }
}
