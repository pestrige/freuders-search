import { ExpertSexFilter, ProfFilter } from "../constants/filters.ts";

export type Filters = {
  ageFrom?: number;
  ageTo?: number;
  offset: number;
  limit: number;
  profSpeciality?: ProfFilterKey;
  ratingFrom?: number;
  ratingTo?: number;
  sex?: SexFilterKey;
  subjectId?: number;
};

export type SexFilterKey = keyof typeof ExpertSexFilter;
export type ProfFilterKey = keyof typeof ProfFilter;

export interface FiltersForm extends Omit<Filters, "offset" | "limit"> {
  rating?: string;
}
