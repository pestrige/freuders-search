export { expertsReducer } from "./model/slice/expertsSlice.ts";
export { ageOptions, sexOptions, profOptions } from "./model/constants/filters.ts";

export { setFilters } from "./services/setFilters.ts";
export { getExperts } from "./services/getExperts.ts";
export { getSubjects } from "./services/getSubjects.ts";

export { useGetDefaultFilters, useGetFiltersOptions } from "./model/selectors/filtersSelectors.ts";
export {
  useExpertsList,
  useIsExpertsEmpty,
  useIsExpertsLoading,
  useIsExpertsMore,
} from "./model/selectors/expertsSelectors.ts";

export type { ExpertsSchema } from "./model/types/schema.ts";
export type { Expert } from "./model/types/expertsTypes.ts";
export type {
  Filters,
  FiltersForm,
  ProfFilterKey,
  SexFilterKey,
} from "./model/types/filtersTypes.ts";
