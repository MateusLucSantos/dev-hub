import { Pivot } from "./pivot";

export interface IGroups {
  id_grupo_cliente: number;
  descricao: string | null;
  data_cadastro: Date;
  ativo: boolean;
  display: string | null;
  pivot: Pivot;
}
