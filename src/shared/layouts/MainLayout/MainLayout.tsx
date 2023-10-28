import { ReactElement, ReactNode } from "react";
import styled from "styled-components";

import { BaseHeader } from "../BaseHeader/BaseHeader.tsx";
import { media } from "src/shared/config";

interface Props {
  children: ReactNode;
}

export function MainLayout({ children }: Props): ReactElement {
  return (
    <>
      <BaseHeader />
      <Main>{children}</Main>
    </>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-self: center;

  width: 100%;
  max-width: 1096px;
  padding: 16px;

  background-color: ${({ theme }) => theme.white};

  ${media.greaterThan("laptop")`
    padding: 52px 44px 80px;
  `}
`;
