import { ReactElement } from "react";
import styled from "styled-components";

export const ErrorComponent = (): ReactElement => {
  const handleRefreshClick = () => {
    window.location.href = "/";
  };

  return (
    <Root>
      <Title>Упс, кажется что-то пошло не так...</Title>
      <button type="button" onClick={handleRefreshClick}>
        Обновить страницу
      </button>
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  padding: var(--margin-l);
`;

const Title = styled.h2`
  margin-bottom: var(--margin-l);
`;
