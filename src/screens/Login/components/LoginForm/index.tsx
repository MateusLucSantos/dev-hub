import { InputForm } from "@/components/InputForm";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { schema } from "./schema";
import { View } from "react-native";
import { s } from "./styles";
import { Button } from "@/components/Button";
import { useAuthContext } from "@/context/auth.context";

import { useSnackbarContext } from "@/context/snackbar.context";
import { useErrorHandler } from "@/shared/hooks/useErrorHandler";

export interface FormLoginParams {
  client_id: string;
  client_secret: string;
  username: string;
  password: string;
  grant_type: string;
}

export function LoginForm() {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormLoginParams>({
    defaultValues: {
      client_id: "",
      client_secret: "",
      username: "",
      password: "",
      grant_type: "",
    },
    resolver: yupResolver(schema),
  });

  const { handleAuthenticate } = useAuthContext();
  const { notify } = useSnackbarContext();
  const { handleError } = useErrorHandler();

  async function onSubmit(formParams: FormLoginParams) {
    try {
      await handleAuthenticate(formParams);
    } catch (error) {
      handleError(error);
    }
  }
  return (
    <>
      <InputForm
        control={control}
        name="client_id"
        label="Cliente ID"
        placeholder="Informe seu Cliente ID"
      />
      <InputForm
        control={control}
        name="client_secret"
        label="Cliente Secret"
        placeholder="Informe seu Cliente Secret"
        secureTextEntry
      />
      <InputForm
        control={control}
        name="username"
        label="Usuário"
        placeholder="Informe seu usuário"
      />
      <InputForm
        control={control}
        name="password"
        label="Senha"
        placeholder="Informe a sua senha"
        secureTextEntry
      />
      <InputForm
        control={control}
        name="grant_type"
        label="Grant Type"
        placeholder="Informe o seu Grant Type"
        secureTextEntry
      />
      <View style={s.areaSubmit}>
        <Button
          title="Entrar"
          onPress={handleSubmit(onSubmit)}
          disabled={isSubmitting}
        />
      </View>
    </>
  );
}
