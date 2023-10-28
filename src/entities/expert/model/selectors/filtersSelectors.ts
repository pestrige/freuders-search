import { createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

import { StoreSchema } from "src/shared/config";
import { ageOptions, profOptions, ratingOptions, sexOptions } from "../constants/filters.ts";
import { FilterOption } from "src/shared/commonTypes";
import { Filters, FiltersForm } from "src/entities/expert";

// getters
export const getSubjects = (store: StoreSchema) => store.experts.subjects;
export const getFilters = (store: StoreSchema) => store.experts.filters;
export const getFiltersOptions = createSelector(getSubjects, (subjects) => {
  const subjectOptions: FilterOption[] = subjects.map(({ name, id }) => ({
    value: id,
    label: name,
  }));
  subjectOptions.unshift({ value: undefined, label: "Все варианты" });

  return {
    subjectId: subjectOptions,
    profSpeciality: profOptions,
    sex: sexOptions,
    ageFrom: ageOptions,
    ageTo: ageOptions,
    rating: ratingOptions,
  };
});
export const getDefaultFilters = createSelector(getFilters, (filters) => {
  const defaultFilters: Partial<Filters> & FiltersForm = { ...filters };
  if (defaultFilters.ratingTo !== undefined) {
    defaultFilters.rating = `${defaultFilters.ratingTo}|${defaultFilters.ratingFrom}`;
  }
  delete defaultFilters.offset;
  delete defaultFilters.limit;
  delete defaultFilters.ratingTo;
  delete defaultFilters.ratingFrom;

  return defaultFilters;
});

// selectors
export const useGetFiltersOptions = () => useSelector(getFiltersOptions);
export const useGetDefaultFilters = () => useSelector(getDefaultFilters);
