import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { getSubjects } from "src/entities/expert";
import { ExpertsSchema } from "../types/schema.ts";
import { getExperts } from "../../services/getExperts.ts";
import { ExpertsResponsePayload } from "../types/expertsTypes.ts";
import { Subject } from "../types/subjectTypes.ts";

const initialState: ExpertsSchema = {
  list: [],
  listLoading: false,
  listInitialLoading: true,
  listCount: 0,
  filters: { offset: 0, limit: 12, ageFrom: 18, ageTo: 99 },
  subjects: [],
  subjectsLoading: false,
};

export const expertsSlice = createSlice({
  name: "experts",
  initialState,
  reducers: {
    setFilters: (state, { payload }: PayloadAction<Partial<ExpertsSchema["filters"]>>) => {
      state.filters = { ...state.filters, ...payload };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getExperts.pending, (state) => {
      state.listLoading = true;
    });
    builder.addCase(
      getExperts.fulfilled,
      (state, { payload }: PayloadAction<ExpertsResponsePayload>) => {
        state.listLoading = false;
        state.listInitialLoading = false;
        if (payload.nextPage) {
          state.list.push(...payload.experts.data.items);
        } else {
          state.list = payload.experts.data.items;
        }
        state.listCount = payload.experts.data.totalCount;
      },
    );
    builder.addCase(getExperts.rejected, (state) => {
      state.listLoading = false;
      state.listInitialLoading = false;
    });

    builder.addCase(getSubjects.pending, (state) => {
      state.subjectsLoading = true;
    });
    builder.addCase(getSubjects.fulfilled, (state, { payload }: PayloadAction<Subject[]>) => {
      state.subjectsLoading = false;
      state.subjects = payload;
    });
    builder.addCase(getSubjects.rejected, (state) => {
      state.subjectsLoading = false;
    });
  },
});

export const { actions: expertsActions } = expertsSlice;
export const { reducer: expertsReducer } = expertsSlice;
