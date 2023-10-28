import { SexFilterKey } from "./filtersTypes.ts";

export interface Expert {
  userId: string; // "c218310a-9e2b-4447-ad52-7718b1e4577c",
  name: string; // "Михаил Владимирович",
  sex: SexFilterKey; // М - 0, Ж - 1
  age: number; // Возраст
  birthDate: string; // "2002-03-04T00:00:00", // Дата рождения
  photoUrl: string; // "https://dummyimage.com/512x512",
  avatarId: string; // "avatar-male-1",
  level: 1 | 0; // Уровень 0 - базовый 1 - премиум
  rating: number; // Значение рейтинга(для New 0)
  hasVideo: false; // Наличие видео
  defaultSubjectName: string; // Основная тема
  subjectsCount: number; // Количество дополнительных тем
  isFavorite: boolean; // В избранном
  onlineStatus: 1 | 0; // 1 - Оффлайн 2 - Онлайн
  lastActivityTime: string; // "2023-10-08T09:28:24.2985824Z" Время последней активности
}
export interface ExpertsResponse {
  data: {
    items: Expert[];
    totalCount: number;
  };
}

export interface ExpertsResponsePayload {
  experts: ExpertsResponse;
  nextPage: boolean;
}
