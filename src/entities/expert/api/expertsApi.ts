import { ApiRoutes, BaseApi } from "src/shared/config";
import { ExpertsResponse } from "../model/types/expertsTypes.ts";
import { SubjectResponse } from "../model/types/subjectTypes.ts";

class ExpertsApi extends BaseApi {
  public getExperts(params: Record<string, string | number>) {
    return this.get<ExpertsResponse>(ApiRoutes.experts, { params });
  }

  public getSubjects() {
    return this.get<SubjectResponse>(ApiRoutes.subjects);
  }
}

export const expertsApi = new ExpertsApi();
