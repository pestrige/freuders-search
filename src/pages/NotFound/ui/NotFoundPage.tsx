import { ReactElement } from "react";
import { MainLayout } from "src/shared/layouts";
import styled from "styled-components";

export function NotFoundPage(): ReactElement {
  return (
    <MainLayout>
      <Wrapper>Страница не найдена</Wrapper>
    </MainLayout>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 48px;
`;
