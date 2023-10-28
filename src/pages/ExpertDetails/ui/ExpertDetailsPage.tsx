import { ReactElement } from "react";
import { MainLayout } from "src/shared/layouts";
import styled from "styled-components";

export function ExpertDetailsPage(): ReactElement {
  return (
    <MainLayout>
      <Wrapper>Страница специалиста в разработке</Wrapper>
    </MainLayout>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 48px;
`;
