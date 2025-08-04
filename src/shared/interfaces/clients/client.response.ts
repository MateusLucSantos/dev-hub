import { Services } from "../treatment/services.response";
import { IGroups } from "./groups";

export interface IClient {
  id_cliente: number;
  uuid_cliente: string;
  codigo_cliente: number;
  nome_razaosocial: string | null;
  nome_fantasia: null;
  tipo_pessoa: string | null;
  cpf_cnpj: string | null;
  telefone_primario: string | null;
  telefone_secundario: string | null;
  telefone_terciario: string | null;
  email_principal: null;
  email_secundario: null;
  rg: string | null;
  rg_emissao: null;
  inscricao_municipal: null;
  inscricao_estadual: null;
  data_cadastro: Date;
  data_nascimento: Date;
  grupos: IGroups[];
  ativo: boolean;
  origem_cliente: string | null;
  motivo_contratacao: string | null;
  id_externo: string | null;
  data_atualizacao: Date;
  nome_pai: string | null;
  nome_mae: string | null;
  estado_civil: string | null;
  genero: string | null;
  nacionalidade: string | null;
  profissao: string | null;
  servicos: Services[];
}
