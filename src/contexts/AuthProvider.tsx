import React, { ReactNode, createContext, useContext, useState } from "react";

import { I200_MeResponseBody } from "@/apis/types/response/I200_MeResponseBody";

interface IAuthContext {
  authData: I200_MeResponseBody["data"];
  setAuthData: (value: I200_MeResponseBody["data"]) => void;
}

interface IAuthProviderProps {
  children?: ReactNode;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const useAuthContext = () => {
  return useContext(AuthContext);
};

const AuthProvider: React.FC<IAuthProviderProps> = (props) => {
  const [auth, setAuth] = useState<I200_MeResponseBody["data"]>(
    {} as I200_MeResponseBody["data"]
  );

  const setAuthData = (value: I200_MeResponseBody["data"]): void => {
    setAuth(value);
  };

  return (
    <>
      <AuthContext.Provider
        value={{
          authData: auth,
          setAuthData,
        }}
      >
        {props.children}
      </AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
