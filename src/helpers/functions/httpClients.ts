import axios, { AxiosResponse, AxiosError, AxiosInstance } from "axios";
import {
  getAccessToken,
  removeAccessToken,
} from "@/helpers/functions/accessToken";

import { AppConfig } from "@/configs/appConfig";
import { IApiUrl, TApiUrlType } from "@/helpers/functions/types";

const apiUrl: IApiUrl = {
  artha: AppConfig.apiUrl,
  mockArtha: AppConfig.mockApiUrl,
};

const token = getAccessToken();

const globalResponseHandler = (response: AxiosResponse) => response;

const globalErrorHandler = (error: AxiosError) => {
  const status = error.response?.status;
  const isTokenExpired = status === 401;

  const origin = window.location.origin;

  if (isTokenExpired) {
    removeAccessToken();
    localStorage.clear();
    const originalRequest = error.config;
    delete originalRequest?.headers.Authorization;
    history.pushState(null, "", origin);
  }
  return Promise.reject(error);
};

const clientConfig = (
  urlType: TApiUrlType = "artha",
  accessToken: string | null = token
): AxiosInstance =>
  axios.create({
    baseURL: apiUrl[urlType],
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

export const client = (
  urlType: TApiUrlType = "artha",
  accessToken: string | null = token
): AxiosInstance => {
  const axiosClient = clientConfig(urlType, accessToken);
  axiosClient.interceptors.response.use(
    globalResponseHandler,
    globalErrorHandler
  );
  return axiosClient;
};

