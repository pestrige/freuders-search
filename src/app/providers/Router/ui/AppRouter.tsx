import { ReactElement, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { appRoutes } from "../model/routesMap.tsx";

/**
 * Router Navigator.
 * In the future add custom Route Element and
 * some checks to separate routes to private and public stacks or user roles.
 */

// TODO: add custom page loader

export function AppRouter(): ReactElement {
  return (
    <Suspense fallback="Загрузка...">
      <Routes>
        {appRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Suspense>
  );
}
