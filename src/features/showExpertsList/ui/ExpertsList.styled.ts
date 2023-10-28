import styled from "styled-components";

import { media } from "src/shared/config";

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(165px, 1fr));
  gap: 16px 8px;

  margin-bottom: 32px;

  ${media.greaterThan("tablet")`
    grid-template-columns: repeat(3, minmax(165px, 1fr));
  `};

  ${media.greaterThan("laptop")`
    gap: 40px 20px;
    margin-bottom: 40px;
  `};
`;

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
`;
