import { createAsyncThunk } from "@reduxjs/toolkit";

import { ThunkConfig } from "src/shared/config";
import { expertsApi } from "../api/expertsApi.ts";
import { Subject } from "../model/types/subjectTypes.ts";

export const getSubjects = createAsyncThunk<Subject[], void, ThunkConfig<string>>(
  "experts/getSubjects",
  async (_, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    const { subjects } = getState().experts;

    if (subjects.length) {
      return subjects;
    }

    try {
      const result = await expertsApi.getSubjects();
      return result.data.data;
    } catch (e) {
      // TODO: handle errors
      return rejectWithValue("Не удалось загрузить фильтры");
    }
  },
);
