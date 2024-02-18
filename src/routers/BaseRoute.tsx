import Base from "@/routers/components/Base";
import NotFound from "@/pages/General/NotFound";

import { TRouters } from "@/routers/types";

export const baseRouters: TRouters = [
  {
    id: "BasePage",
    path: "/",
    element: <Base />,
  },
  {
    id: "NotFoundPage",
    path: "/*",
    element: <NotFound />,
  },
] as TRouters;
