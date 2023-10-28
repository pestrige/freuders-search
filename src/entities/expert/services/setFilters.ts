import { createAsyncThunk } from "@reduxjs/toolkit";

import { addQueryParams } from "src/shared/lib";
import { ThunkConfig } from "src/shared/config";
import { FiltersForm } from "../model/types/filtersTypes.ts";
import { expertsActions } from "../model/slice/expertsSlice.ts";
import { getExperts } from "./getExperts.ts";

export const setFilters = createAsyncThunk<void, FiltersForm, ThunkConfig<string>>(
  "experts/setFilters",
  async (filtersForm, thunkAPI) => {
    const { dispatch, getState } = thunkAPI;
    const { filters } = getState().experts;

    const params = { ...filters, ...filtersForm };
    const rating = filtersForm.rating?.split("|");
    params.ratingFrom = rating?.[1] ? Number(rating[1]) : undefined;
    params.ratingTo = rating?.[0] ? Number(rating[0]) : undefined;

    params.offset = 0;
    delete params.rating;

    dispatch(expertsActions.setFilters(params));
    addQueryParams(params);
    dispatch(getExperts());
  },
);
