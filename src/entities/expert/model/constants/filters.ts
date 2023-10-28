import { getOptions } from "src/shared/lib";

export const ProfFilter = {
  1: "Консультант",
  2: "Сексолог",
  3: "Коуч",
} as const;

export const ExpertSexFilter = {
  1: "Мужчина",
  2: "Женщина",
} as const;

export const ageOptions = new Array(82).fill(0).map((_, index) => ({
  value: index + 18,
  label: (index + 18).toString(),
}));
export const ratingOptions = [
  { value: undefined, label: "Не важен" },
  { value: "0|0", label: "Новые" },
  { value: "100|80", label: "От 100 до 80" },
  { value: "79|60", label: "От 79 до 60" },
  { value: "59|40", label: "От 59 до 40" },
];
export const profOptions = getOptions(ProfFilter, "Все варианты");
export const sexOptions = getOptions(ExpertSexFilter, "Любого пола");
