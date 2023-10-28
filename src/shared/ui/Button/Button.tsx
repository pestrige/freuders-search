import { ReactElement, memo, ButtonHTMLAttributes } from "react";

import { Loader } from "../Loader/Loader.tsx";
import { StyledButton, Wrapper } from "./Button.styled.ts";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  fullWidth?: boolean;
  big?: boolean;
}

export const Button = memo(function Button({
  children,
  fullWidth = true,
  loading = false,
  big = false,
  ...otherProps
}: Props): ReactElement {
  return (
    <StyledButton $big={big} $loading={loading} $fullWidth={fullWidth} {...otherProps}>
      {loading && <Loader absolute={true} size={28} />}
      <Wrapper $loading={loading}>{children}</Wrapper>
    </StyledButton>
  );
});
