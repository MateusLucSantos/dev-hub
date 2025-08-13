import axios from "axios";
import { devHubApi } from "@/shared/api/dev-hub";
import {
  GetAttentanceParams,
  GetAttentanceResponse,
} from "@/shared/interfaces/attentances/attentance.response";

interface ApiResponse {
  atendimentos: GetAttentanceResponse[];
  msg: string;
  status: string;
}

export async function fetchAttentance(
  params: GetAttentanceParams & { page: number; limit: number }
): Promise<GetAttentanceResponse[]> {
  if (!params.busca || !params.termo_busca) {
    return [];
  }

  try {
    const searchParams = new URLSearchParams({
      busca: params.busca,
      termo_busca: params.termo_busca,
      page: String(params.page),
      limit: String(params.limit),
    });

    const { data } = await devHubApi.get<ApiResponse>(
      `/api/v1/integracao/cliente/atendimento?${searchParams}`
    );

    return data?.atendimentos || [];
  } catch (error) {
    console.error("Erro ao buscar atendimentos:", error);
    throw new Error(
      error instanceof Error ? error.message : "Erro ao buscar atendimentos"
    );
  }
}
