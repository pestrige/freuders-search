import { AppRoutes, getRoute } from "src/shared/config";
import { RouteProps } from "react-router-dom";
import { ReactElement } from "react";
import { NotFoundPage, ExpertsSearchPage, ExpertDetailsPage } from "src/pages";

type AppRouteProps = RouteProps & {
  element: ReactElement;
};

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
  [AppRoutes.MAIN]: { element: <ExpertsSearchPage />, path: getRoute.main() },
  [AppRoutes.EXPERT]: { element: <ExpertDetailsPage />, path: getRoute.expert(":id") },

  // must be last
  [AppRoutes.NOT_FOUND]: { element: <NotFoundPage />, path: "*" },
};

export const appRoutes: AppRouteProps[] = Object.values(routeConfig);
