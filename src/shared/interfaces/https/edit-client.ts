import { IClient } from "../clients/client.response";

export interface EditClienteParams {
  tipo_pessoa: string;
  ativo: boolean;
  nome_razaosocial: string;
  nome_fantasia?: string | null;
  cpf_cnpj: string;
  inscricao_municipal?: string | null;
  inscricao_estadual?: string | null;
  rg?: string | null;
  rg_emissor?: string | null;
  data_nascimento?: string | null;
  telefone_primario: string;
  telefone_secundario?: string | null;
  telefone_terciario?: string | null;
  email_principal?: string | null;
  email_secundario?: string | null;
  grupos?: [
    {
      id_grupo_cliente?: number | null;
    }
  ];
  origem_cliente?: number | null;
  motivo_contratacao?: number | null;
  nome_pai?: string | null;
  nome_mae?: string | null;
  estado_civil?: string | null;
  genero?: string | null;
  nacionalidade?: string;
  profissao?: string | null;
}

export interface EditClienteResponse {
  cliente: IClient;
  msg: string;
  status: string;
}
