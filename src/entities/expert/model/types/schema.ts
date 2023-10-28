import { Filters } from "./filtersTypes.ts";
import { Subject } from "./subjectTypes.ts";
import { Expert } from "./expertsTypes.ts";

export interface ExpertsSchema {
  list: Expert[];
  listLoading: boolean;
  listInitialLoading: boolean;
  listCount: number;
  filters: Filters;
  subjects: Subject[];
  subjectsLoading: boolean;
}
