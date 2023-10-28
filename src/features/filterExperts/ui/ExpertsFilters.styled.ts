import styled from "styled-components";

import { media } from "src/shared/config";
import { Label } from "src/shared/ui";

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  align-items: end;
  gap: 20px 16px;

  padding: 8px;
  margin-bottom: 8px;

  border-radius: 2px;
  border: 1px solid ${({ theme }) => theme.primary500};

  ${media.greaterThan("laptop")`
    grid-template-columns: repeat(3, 1fr);
    gap: 36px 80px;

    padding: 0 0 24px 0;
    margin-bottom: 24px;

    border-top: none;
    border-left: none;
    border-right: none;
  `};
`;

interface StyledProps {
  $full: boolean;
}
export const GridItem = styled.div<StyledProps>`
  display: grid;
  grid-template-columns: ${({ $full }) => ($full ? "1fr" : "auto 1fr 1fr")};
  align-items: center;
  column-gap: 16px;

  ${media.greaterThan("laptop")`
      grid-template-columns: ${({ $full }: StyledProps) => ($full ? "1fr" : "1fr 1fr")};
      row-gap: 12px;
  `};
`;

export const AgeLabel = styled(Label)`
  ${media.greaterThan("laptop")`
      grid-column: 1 / 3;
  `};
`;
