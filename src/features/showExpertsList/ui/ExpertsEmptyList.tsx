import { ReactElement, memo } from "react";
import styled from "styled-components";

import { EmptySearchIcon } from "src/shared/assets";
import { media } from "src/shared/config";

export const ExpertsEmptyList = memo(function ExpertsEmptyList(): ReactElement {
  return (
    <Root>
      <StyledIcon />
      <Text>К сожалению, нет анкет с такими параметрами</Text>
    </Root>
  );
});

const Root = styled.section`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const StyledIcon = styled(EmptySearchIcon)`
  width: 100px;
  height: 100px;

  ${media.greaterThan("laptop")`
    width: 160px;
    height: 160px;
  `};
`;

const Text = styled.p`
  max-width: 180px;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%;
  text-align: center;

  ${media.greaterThan("laptop")`
    font-size: 20px;
    max-width: 265px;
  `};
`;
