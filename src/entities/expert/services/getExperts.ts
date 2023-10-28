import { createAsyncThunk } from "@reduxjs/toolkit";

import { ThunkConfig } from "src/shared/config";
import { ExpertsResponsePayload } from "../model/types/expertsTypes.ts";
import { expertsApi } from "../api/expertsApi.ts";
import { expertsActions } from "../model/slice/expertsSlice.ts";

export const getExperts = createAsyncThunk<
  ExpertsResponsePayload,
  boolean | undefined,
  ThunkConfig<string>
>("experts/getExperts", async (nextPage, thunkAPI) => {
  const { rejectWithValue, getState, dispatch } = thunkAPI;
  const { filters } = getState().experts;
  const newFilters = { ...filters };

  if (nextPage) {
    newFilters.offset = filters.offset + filters.limit;
    dispatch(expertsActions.setFilters(newFilters));
  }

  try {
    const result = await expertsApi.getExperts(newFilters);
    return { experts: result.data, nextPage: !!nextPage };
  } catch (e) {
    // TODO: handle errors
    return rejectWithValue("Не удалось загрузить специалистов");
  }
});
