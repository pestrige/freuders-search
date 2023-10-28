import styled from "styled-components";

import { media } from "src/shared/config";

interface StyledButtonProps {
  $loading: boolean;
  $fullWidth: boolean;
  $big?: boolean;
}

export const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "auto")};
  padding: ${({ $big }) => ($big ? "12px 48px" : "8px")};
  margin: 0;
  min-height: 40px;

  font-size: 14px;
  line-height: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.accent};

  border: none;
  cursor: ${({ $loading }) => ($loading ? "default" : "pointer")};
  transition:
    opacity 0.3s,
    background-color 0.3s;

  ${media.greaterThan("laptop")`
    padding: ${({ $big }: StyledButtonProps) => ($big ? "16px 68px" : "16px")};
    min-height: 52px;
    font-size: 20px;
    line-height: 20px;
  `};

  @media (hover: hover) {
    &:hover:not(:disabled) {
      background-color: ${({ $loading, theme }) => ($loading ? theme.accent : theme.accent700)};
    }
  }

  &:active:not(:disabled) {
    opacity: ${({ $loading }) => ($loading ? 1 : 0.8)};
    background-color: ${({ $loading, theme }) => ($loading ? theme.accent : theme.accent700)};
  }
`;

export const Wrapper = styled.span<{ $loading: boolean }>`
  opacity: ${({ $loading }) => ($loading ? 0 : 1)};
`;
