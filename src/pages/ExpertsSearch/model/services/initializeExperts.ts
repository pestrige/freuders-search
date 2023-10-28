import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "src/shared/config";
import { FiltersForm, getExperts } from "src/entities/expert";
import { getFiltersFromUrl } from "src/shared/lib";
import { expertsActions } from "src/entities/expert/model/slice/expertsSlice.ts";

export const initializeExperts = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
  "experts/initializeExperts",
  async (searchParams, thunkApi) => {
    const { getState, dispatch } = thunkApi;
    const isInitLoading = getState().experts.listInitialLoading;

    if (isInitLoading) {
      const filters: FiltersForm = getFiltersFromUrl(searchParams);

      dispatch(expertsActions.setFilters(filters));
      dispatch(getExperts());
    }
  },
);
