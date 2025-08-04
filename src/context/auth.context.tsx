import { FormLoginParams } from "@/screens/Login/components/LoginForm";
import { createContext, PropsWithChildren, useContext, useState } from "react";
import * as authService from "@/shared/services/dev-hub/auth.service";
import { IAuthenticateResponse } from "@/shared/interfaces/https/authenticate.response";
import AsyncStorage from "@react-native-async-storage/async-storage";

type AuthContextType = {
  access_token: string | null;
  expires_in: number;
  token_type: string | null;
  refresh_token: string | null;
  handleAuthenticate: (formParams: FormLoginParams) => Promise<void>;
  handleLogout: () => void;
  restoreAuthSession: () => Promise<string | null>;
};

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

export function AuthContextProvider({ children }: PropsWithChildren) {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [expiresIn, setExpiresIn] = useState<number>(0);
  const [tokenType, setTokenType] = useState<string | null>(null);
  const [refreshToken, setRefreshToken] = useState<string | null>(null);

  async function handleAuthenticate(formParams: FormLoginParams) {
    const { access_token, expires_in, token_type, refresh_token } =
      await authService.authenticate(formParams);
    await AsyncStorage.setItem(
      "dev-hub-login",
      JSON.stringify({
        access_token,
      })
    );
    setAccessToken(access_token);
    setExpiresIn(expires_in);
    setTokenType(token_type);
    setRefreshToken(refresh_token);
  }

  async function handleLogout() {
    await AsyncStorage.clear();
    setAccessToken(null);
    setExpiresIn(0);
    setTokenType(null);
    setRefreshToken(null);
  }

  async function restoreAuthSession() {
    const authData = await AsyncStorage.getItem("dev-hub-login");

    if (authData) {
      const { access_token, expires_in, refresh_token, token_type } =
        JSON.parse(authData) as IAuthenticateResponse;
      setAccessToken(access_token);
      setExpiresIn(expires_in);
      setTokenType(refresh_token);
      setRefreshToken(token_type);
    }

    return authData;
  }

  return (
    <AuthContext.Provider
      value={{
        access_token: accessToken,
        expires_in: expiresIn,
        token_type: tokenType,
        refresh_token: refreshToken,
        handleAuthenticate,
        handleLogout,
        restoreAuthSession,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const context = useContext(AuthContext);

  return context;
}
