import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  // Navigate,
  // Outlet,
} from "react-router-dom";
import BeforeEach from "./components/BeforeEach";
import { baseRouters } from "@/routers/BaseRoute";
import { authRouters } from "@/routers/AuthRoute";
import { privateRouters } from "@/routers/PrivateRoute";

import { TRouters } from "@/routers/types";

const AppRouters = () => {
  const [routers] = useState<TRouters>([
    ...baseRouters,
    ...authRouters,
    ...privateRouters,
  ] as TRouters);

  return (
    <>
      <BrowserRouter>
        <BeforeEach />
        <Routes>
          {routers.map((route) => {
            if (route.children === undefined)
              return (
                <Route
                  key={route.id}
                  path={route.path}
                  element={route.element}
                />
              );
            return (
              <Route key={route.id} element={route.element}>
                {route.children.map((child) => (
                  <Route
                    key={child.id}
                    path={child.path}
                    element={child.element}
                  />
                ))}
              </Route>
            );
          })}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRouters;
