import { ReactElement, memo } from "react";

import { ThemeKey } from "src/shared/config";
import { Root, Wrapper } from "./Loader.styled";

interface Props {
  size?: number;
  absolute?: boolean;
  color?: ThemeKey;
}

export const Loader = memo(function Loader({
  size = 40,
  color = "white",
  absolute = false,
}: Props): ReactElement {
  return (
    <Root $size={size} $absolute={absolute}>
      <Wrapper $color={color} $size={size} $absolute={absolute}>
        <span />
        <span />
        <span />
        <span />
      </Wrapper>
    </Root>
  );
});
