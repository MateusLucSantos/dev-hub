import * as yup from "yup";

export const schema = yup.object().shape({
  client_id: yup.string().required("Cliente ID inválido!"),
  client_secret: yup.string().required("Cliente Secret inválido!"),
  username: yup.string().required("Usuário inválido!"),
  password: yup
    .string()
    .required("Senha inválida!")
    .min(6, "Deve ter no mínimo 6 caracteres"),
  grant_type: yup.string().required("Grand Type inválido!"),
});
