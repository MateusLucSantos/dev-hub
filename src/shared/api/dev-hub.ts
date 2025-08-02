import axios from "axios";
import { AppError } from "../helpers/AppError";
import App from "App";
import { Appearance } from "react-native";

export const devHubApi = axios.create({
  baseURL: "https://api.dev.hubsoft.com.br",
});

devHubApi.interceptors.response.use(
  (config) => config,
  (error) => {
    let msg = error.response?.data?.msg || "Falha na requisição";
    return Promise.reject(new AppError(msg));
  }
);
