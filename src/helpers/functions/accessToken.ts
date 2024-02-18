import { aesDecrypt, aesEncrypt } from "@/helpers/functions/crypto";

const findAccessTokenName = (name: string): string => {
  const sessionListKey = Object.keys(sessionStorage);
  return sessionListKey.length > 0
    ? sessionListKey.filter((key) => aesDecrypt(key) === name)[0]
    : "";
};

export const getAccessToken = (): string | null => {
  const sessionName = "access_token";
  const session = sessionStorage.getItem(findAccessTokenName(sessionName));

  if (session === null) return null;
  return aesDecrypt(session);
};

export const setAccessToken = (payload: string) => {
  const sessionName = aesEncrypt("access_token");
  payload = aesEncrypt(payload);
  sessionStorage.setItem(sessionName, payload);
};

export const removeAccessToken = () => {
  const sessionName = "access_token";
  const session = sessionStorage.getItem(findAccessTokenName(sessionName));
  if (session !== null) sessionStorage.removeItem(session);
};
