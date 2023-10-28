export interface Subject {
  id: number;
  name: string;
  sequence: number;
}

export interface SubjectResponse {
  data: Subject[];
}
