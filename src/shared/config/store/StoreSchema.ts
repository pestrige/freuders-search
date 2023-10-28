import { ExpertsSchema } from "src/entities/expert";

export interface StoreSchema {
  experts: ExpertsSchema;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  state: StoreSchema;
}
