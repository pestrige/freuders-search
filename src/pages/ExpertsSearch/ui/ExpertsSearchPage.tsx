import { ReactElement } from "react";

import { ExpertsFilters } from "src/features/filterExperts";
import { ExpertsList } from "src/features/showExpertsList";
import { MainLayout } from "src/shared/layouts";
import { useInitialFilters } from "../hooks/useInitialFilters.ts";
import { useIsInitialLoading } from "src/entities/expert/model/selectors/expertsSelectors.ts";
import { Loader } from "src/shared/ui";

export function ExpertsSearchPage(): ReactElement {
  const isInitialLoading = useIsInitialLoading();
  useInitialFilters();

  if (isInitialLoading) {
    return (
      <MainLayout>
        <Loader size={80} absolute={true} color="accent" />
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <ExpertsFilters />
      <ExpertsList />
    </MainLayout>
  );
}
