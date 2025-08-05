export interface GetAttentanceParams {
  busca: string;
  termo_busca: string;
}

export interface GetAttentanceResponse {
  id_atendimento: number;
  protocolo: string;
  descricao_abertura: string;
  descricao_fechamento: string | null;
  tipo_atendimento: string;
  usuario_abertura: string;
  usuario_responsavel: string;
  usuario_fechamento: string | null;
  data_cadastro: Date;
  data_fechamento: Date;
  status: string;
  cliente: {
    codigo_cliente: number;
    nome_razaosocial: string;
    cpf_cnpj: string;
  };
}
