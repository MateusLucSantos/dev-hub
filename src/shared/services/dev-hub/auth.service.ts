import { FormLoginParams } from "@/screens/Login/components/LoginForm";
import { devHubApi } from "@/shared/api/dev-hub";
import { IAuthenticateResponse } from "@/shared/interfaces/https/authenticate.response";

export async function authenticate(
  formParams: FormLoginParams
): Promise<IAuthenticateResponse> {
  const { data } = await devHubApi.post<IAuthenticateResponse>(
    "/oauth/token",
    formParams
  );

  return data;
}
