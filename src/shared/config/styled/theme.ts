import { DetailedHTMLProps, HTMLAttributes } from "react";

export type Theme = typeof theme;
export type ThemeKey = keyof Theme;

export type StyledProps = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
  theme: Theme;
};

export const theme = {
  white: "#FFFFFF",

  primary: "#000000",
  primary500: "#CCCCCC",
  primary600: "#666666",

  secondary: "#4496f380",
  secondary500: "#4496F333",

  accent: "#FF006B",
  accent700: "#E50060",
  warning: "#EC4154",
  online: "#37B86B",
} as const;
