import { ReactElement, memo } from "react";
import styled from "styled-components";

import { media } from "src/shared/config";
import { BurgerIcon, DotsIcon, FreudersLogo } from "src/shared/assets";

export const BaseHeader = memo(function BaseHeader(): ReactElement {
  return (
    <Header>
      <BurgerIcon />

      <LogoWrapper>
        <FreudersLogo />
      </LogoWrapper>

      <DotsIcon />
    </Header>
  );
});

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 8px;
  background-color: ${({ theme }) => theme.white};

  ${media.greaterThan("laptop")`
    display: none;
  `};
`;

const LogoWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
`;
