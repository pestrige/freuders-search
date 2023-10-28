import { Filters, ProfFilterKey, SexFilterKey } from "src/entities/expert";

export const getFiltersFromUrl = (searchParams: URLSearchParams): Partial<Filters> => {
  const ageFrom = searchParams.get("ageFrom");
  const ageTo = searchParams.get("ageTo");
  const offset = searchParams.get("offset");
  const profSpeciality = searchParams.get("profSpeciality");
  const ratingFrom = searchParams.get("ratingFrom");
  const ratingTo = searchParams.get("ratingTo");
  const sex = searchParams.get("sex");
  const subjectId = searchParams.get("subjectId");

  const filters = {
    ageFrom: ageFrom ? Number(ageFrom) : undefined,
    ageTo: ageTo ? Number(ageTo) : undefined,
    offset: offset ? Number(offset) : 0,
    profSpeciality: profSpeciality ? (Number(profSpeciality) as ProfFilterKey) : undefined,
    ratingFrom: ratingFrom ? Number(ratingFrom) : undefined,
    ratingTo: ratingTo ? Number(ratingTo) : undefined,
    sex: sex ? (Number(sex) as SexFilterKey) : undefined,
    subjectId: subjectId ? Number(subjectId) : undefined,
  };

  for (const key in filters) {
    if (filters[key as keyof typeof filters] === undefined) {
      delete filters[key as keyof typeof filters];
    }
  }

  return filters;
};
