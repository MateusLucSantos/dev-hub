import axios from "axios";
import { AppError } from "../helpers/AppError";
import { addTokenToRequest } from "../helpers/axios.helper";

export const devHubApi = axios.create({
  baseURL: "https://api.dev.hubsoft.com.br",
});

addTokenToRequest(devHubApi);

devHubApi.interceptors.response.use(
  (config) => config,
  (error) => {
    let msg = error.response?.data?.msg || "Falha na requisição";
    return Promise.reject(new AppError(msg));
  }
);
