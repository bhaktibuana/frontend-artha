import { IAppConfig } from "@/configs/types";

const jwtSecretKey = import.meta.env.VITE_JWT_SECRET_KEY as string;
const apiUrl = import.meta.env.VITE_API_URL as string;
const mockApiUrl = import.meta.env.VITE_MOCK_API_URL as string;

export const AppConfig: IAppConfig = {
  jwtSecretKey,
  apiUrl,
  mockApiUrl,
};
