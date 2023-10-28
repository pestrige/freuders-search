import { configureStore } from "@reduxjs/toolkit";
import { expertsReducer } from "src/entities/expert";

import { StoreSchema } from "./StoreSchema";

export const createReduxStore = (initialState?: StoreSchema) => {
  return configureStore({
    reducer: {
      experts: expertsReducer,
    },
    devTools: import.meta.env.DEV,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  });
};

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
