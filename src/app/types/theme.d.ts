import "styled-components";
import { Theme } from "src/shared/config";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
