import styled from "styled-components";

import { media } from "src/shared/config";

interface StyledProps {
  $left: boolean;
}
export const Title = styled.p<StyledProps>`
  margin-left: ${({ $left }) => ($left ? "0" : "4px")};
  margin-bottom: ${({ $left }) => ($left ? "0" : "8px")};

  font-size: 14px;
  font-style: normal;
  font-weight: 700;

  ${media.greaterThan("laptop")`
    margin-left: ${({ $left }: StyledProps) => ($left ? "0" : "8px")};
    margin-bottom: ${({ $left }: StyledProps) => ($left ? "0" : "12px")};
    font-size: 18px;
  `}
`;
