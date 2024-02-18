import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useJwt } from "react-jwt";
import { notification } from "antd";

import { APIAuth } from "@/apis/auth";
import {
  getAccessToken,
  removeAccessToken,
} from "@/helpers/functions/accessToken";
import { IAccessTokenPayload } from "@/routers/components/types";
import { useAuthContext } from "@/contexts/AuthProvider";

import { I200_MeResponseBody } from "@/apis/types/response/I200_MeResponseBody";

const BeforeEach = () => {
  const token = getAccessToken();
  const { setAuthData } = useAuthContext();
  const navigate = useNavigate();
  const { decodedToken, isExpired } = useJwt(token || "");

  const getMe = async (id: string): Promise<void> => {
    try {
      const response = await APIAuth.me(id);
      setAuthData(response.data?.data);
    } catch (error) {
      removeAccessToken();
      setAuthData({} as I200_MeResponseBody["data"]);
      notification["error"]({
        message: "Error",
        description: "Authentication failed",
        placement: "bottom",
      });
    }
  };

  useEffect(() => {
    if (decodedToken === null) return;
    if (isExpired) {
      removeAccessToken();
      setAuthData({} as I200_MeResponseBody["data"]);
    } else {
      const payload: IAccessTokenPayload = decodedToken as IAccessTokenPayload;
      getMe(payload.id.toString());
    }
  }, [navigate, decodedToken, isExpired]);

  return null;
};

export default BeforeEach;
