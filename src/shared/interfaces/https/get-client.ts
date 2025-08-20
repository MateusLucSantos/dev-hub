import { IClient } from "../clients/client.response";
import { Pagination } from "../pagination-client";

export interface QueryPagination {
  pagina: number;
  itens_por_pagina: number;
  total_registros?: number;
}

export interface GetClientsParams {
  pagina: number;
  itens_por_pagina: number;
  data_inicio?: Date;
  data_fim?: Date;
  cancelado?: boolean;
  possui_pacote?: boolean;
  codigo_pacote?: number;
  servico_status?: string;
  relacoes?: string;
  grupo_cliente_servico?: number;
  aguardando_migracao?: boolean;
}

export interface GetClientResponse {
  clientes: IClient[];
  msg: string;
  paginacao: Pagination;
  status: string;
}
