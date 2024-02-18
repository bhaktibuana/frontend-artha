import Dashboard from "@/pages/User/Dashboard/Dashboard";

import { TRouters } from "@/routers/types";

export const userRouters: TRouters = [
  {
    id: "Dashboard",
    path: "/dashboard",
    element: <Dashboard />,
  },
] as TRouters;
