import { FilterOption } from "src/shared/commonTypes";

export const getOptions = (optionsObject: Record<number, string>, defaultLabel: string) => {
  const options: FilterOption[] = Object.entries(optionsObject).map(([key, value]) => ({
    value: Number(key),
    label: value,
  }));
  options.unshift({ value: undefined, label: defaultLabel });

  return options;
};
