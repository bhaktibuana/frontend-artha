import { Navigate, Outlet } from "react-router-dom";

import { getAccessToken } from "@/helpers/functions/accessToken";

const Auth = () => {
  const token = getAccessToken();

  if (token) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default Auth;
