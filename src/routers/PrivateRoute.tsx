import Private from "@/routers/components/Private";

import { userRouters } from "@/routers/UserRoute";
import { TRouters } from "@/routers/types";

export const privateRouters: TRouters = [
  {
    id: "Private",
    element: <Private />,
    children: [...userRouters],
  },
] as TRouters;
