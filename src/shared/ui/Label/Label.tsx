import { ReactElement, memo } from "react";

import { Title } from "./Label.styled";

interface Props {
  label: string;
  left?: boolean;
}

export const Label = memo(function Label({
  label,
  left = false,
  ...styledProps
}: Props): ReactElement {
  return (
    <Title $left={left} {...styledProps}>
      {label}
    </Title>
  );
});
