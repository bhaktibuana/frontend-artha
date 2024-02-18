import { Navigate, Outlet } from "react-router-dom";
import { useJwt } from "react-jwt";

import { getAccessToken } from "@/helpers/functions/accessToken";

const Private = () => {
  const token = getAccessToken();
  const { isExpired } = useJwt(token || "");

  if (!token) {
    return <Navigate to="/login" />;
  }

  if (isExpired) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default Private;
