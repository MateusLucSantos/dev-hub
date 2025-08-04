import { Seller } from "./seller";

export interface Services {
  id_cliente_servico: number | null;
  uuid_cliente_servico: string | null;
  id_servico: number | null;
  numero_plano: number | null;
  nome: string | null;
  valor: number | null;
  status: string | null;
  status_prefixo: string | null;
  tecnologia: string | null;
  velocidade_download: string | null;
  velocidade_upload: string | null;
  login: string | null;
  senha: string | null;
  referencia: string | null;
  ipv4: string | null;
  ipv6: string | null;
  mac_addr: string | null;
  phy_addr: string | null;
  vlan: number | null;
  observacoes_autenticacao: string | null;
  id_motivo_cancelamento: string | null;
  data_cancelamento: Date;
  motivo_cancelamento: string | null;
  motivo_cancelamento_prefixo: string | null;
  anotacoes: string | null;
  data_cadastro: Date;
  data_habilitacao: Date;
  data_habilitacao_br: Date;
  data_venda: Date;
  data_atualizacao: Date;
  id_cliente_servico_antigo: number | null;
  id_prospecto: number | null;
  vendedor: Seller;
}
