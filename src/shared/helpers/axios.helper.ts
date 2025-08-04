import AsyncStorage from "@react-native-async-storage/async-storage";
import { AxiosInstance } from "axios";
import { IAuthenticateResponse } from "../interfaces/https/authenticate.response";

export function addTokenToRequest(axiosInstance: AxiosInstance) {
  axiosInstance.interceptors.request.use(
    async (config) => {
      const data = await AsyncStorage.getItem("dev-hub-login");

      if (data) {
        const { access_token, expires_in, token_type } = JSON.parse(
          data
        ) as IAuthenticateResponse;

        if (access_token) {
          config.headers.Authorization = `Bearer ${access_token}`;
        }
      }

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
}
