import * as yup from "yup";

export const schema = yup.object().shape({
  tipo_pessoa: yup.string().required("Informe o tipo do cadastro CPF ou CNPJ."),
  ativo: yup
    .boolean()
    .required("É necessário informar se o cliente está ativo."),
  nome_razaosocial: yup
    .string()
    .required("O nome ou razão social é obrigatório."),
  cpf_cnpj: yup.string().required("O CPF ou CNPJ é obrigatório."),
  telefone_primario: yup.string().required("Informe o telefone para contato."),
});
