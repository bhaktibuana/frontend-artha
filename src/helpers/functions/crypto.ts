import CryptoJS from "crypto-js";

const salt = "p@5s.@rth4";

export const aesEncrypt = (payload: string) => {
  return CryptoJS.AES.encrypt(payload, salt).toString();
};

export const aesDecrypt = (payload: string) => {
  return CryptoJS.AES.decrypt(payload, salt).toString(CryptoJS.enc.Utf8);
};
