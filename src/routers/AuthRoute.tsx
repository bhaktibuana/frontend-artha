import Auth from "@/routers/components/Auth";
import Login from "@/pages/Auth/Login/Login";
import Register from "@/pages/Auth/Register/Register";

import { TRouters } from "@/routers/types";

export const authRouters: TRouters = [
  {
    id: "Auth",
    element: <Auth />,
    children: [
      {
        id: "Login",
        path: "/login",
        element: <Login />,
      },
      {
        id: "Register",
        path: "/register",
        element: <Register />,
      },
    ],
  },
] as TRouters;
