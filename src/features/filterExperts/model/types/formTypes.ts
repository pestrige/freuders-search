export interface FormItem {
  name: "subjectId" | "sex" | "profSpeciality" | "ageFrom" | "ageTo" | "rating";
  placeholder?: string;
  title?: string;
  prefix?: string;
  secondItem?: FormItem;
}
