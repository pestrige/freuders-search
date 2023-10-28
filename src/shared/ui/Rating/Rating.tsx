import { ReactElement, memo } from "react";
import { Root, Subtitle, Title } from "./Rating.styled.ts";

interface Props {
  rating: number;
}

export const Rating = memo(function Rating({ rating }: Props): ReactElement {
  return (
    <Root>
      <Title>Рейтинг</Title>
      <Subtitle $new={!!rating}>{rating || "New"}</Subtitle>
    </Root>
  );
});
