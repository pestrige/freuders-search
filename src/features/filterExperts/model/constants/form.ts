import { FormItem } from "../types/formTypes.ts";

export const formMap: FormItem[] = [
  { name: "sex", title: "Я ищу психолога" },
  {
    name: "ageFrom",
    title: "В возрасте",
    prefix: "От",
    secondItem: {
      name: "ageTo",
      prefix: "До",
    },
  },
  { name: "subjectId", title: "Тема", placeholder: "Все варианты" },
  { name: "profSpeciality", title: "Квалификация" },
  { name: "rating", title: "Рейтинг" },
];
