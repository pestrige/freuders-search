import { ReactElement, ReactNode } from "react";
import { ThemeProvider as ThemeProviderSC } from "styled-components";

import { theme } from "src/shared/config";

interface Props {
  children: ReactNode;
}

export function ThemeProvider({ children }: Props): ReactElement {
  return <ThemeProviderSC theme={theme}>{children}</ThemeProviderSC>;
}
