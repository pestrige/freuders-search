import { useSelector } from "react-redux";
import { StoreSchema } from "src/shared/config";
import { createSelector } from "@reduxjs/toolkit";

// getters
const getExperts = (store: StoreSchema) => store.experts.list;
const getExpertsCount = (store: StoreSchema) => store.experts.listCount;
const getIsListInitialLoading = (store: StoreSchema) => store.experts.listInitialLoading;
const getIsSubjectsLoading = (store: StoreSchema) => store.experts.subjectsLoading;
const getIsInitial = createSelector(
  getIsListInitialLoading,
  getIsSubjectsLoading,
  (listInitialLoading, subjectsLoading) => listInitialLoading || subjectsLoading,
);
const getExpertsList = createSelector(getExperts, (list) => list);
const getIsNeedToLoadMore = createSelector(
  getExperts,
  getExpertsCount,
  (list, count) => count > list.length,
);
const getIsEmpty = createSelector(
  getExperts,
  getIsListInitialLoading,
  (list, isInit) => !isInit && list.length === 0,
);

// selectors
export const useIsInitialLoading = () => useSelector(getIsInitial);
export const useIsExpertsLoading = () =>
  useSelector((store: StoreSchema) => store.experts.listLoading);
export const useIsExpertsEmpty = () => useSelector(getIsEmpty);
export const useIsExpertsMore = () => useSelector(getIsNeedToLoadMore);
export const useExpertsList = () => useSelector(getExpertsList);
