import styled from "styled-components";

import { media } from "src/shared/config";
import { DropdownIcon } from "src/shared/assets";

export const Inner = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const Prefix = styled.span`
  flex-shrink: 0;
  margin-right: 4px;

  font-size: 12px;
  font-style: normal;
  font-weight: 500;

  ${media.greaterThan("laptop")`
    margin-right: 16px;
    font-size: 20px;
  `}
`;

export const SelectBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;

  position: relative;
`;

export const ValueButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;

  position: relative;
  padding: 8px;
  min-height: 40px;

  text-align: left;
  background-color: ${({ theme }) => theme.white};
  border-radius: 2px;
  border: 1px solid ${({ theme }) => theme.primary500};
  cursor: pointer;
  transition: border-color 0.3s;

  ${media.greaterThan("laptop")`
    padding: 12px;
    min-height: 52px;
  `};

  @media (hover: hover) {
    &:hover {
      border-color: ${({ theme }) => theme.primary600};
    }
  }
`;

export const Arrow = styled(DropdownIcon)<{ $reverse: boolean }>`
  transition: transform 0.5s;
  ${({ $reverse }) => $reverse && `transform: rotate(180deg);`}
`;

export const Options = styled.ul`
  position: absolute;
  z-index: 1;
  top: calc(100% + 0.5rem);
  left: 0;
  width: 100%;
  max-height: 30vh;
  overflow-y: auto;

  border-radius: 2px;
  box-shadow: 0 0 3px 3px rgba(0, 0, 0, 0.08);
  background-color: ${({ theme }) => theme.white};
`;

export const Option = styled.li<{ $active?: boolean }>`
  padding: 0.5rem 0.75rem;

  border-bottom: 1px solid ${({ theme }) => theme.primary500};
  background-color: ${({ $active, theme }) => ($active ? theme.secondary : theme.white)};
  transition: background-color 0.3s;
  cursor: ${({ $active }) => ($active ? "default" : "pointer")};

  @media (hover: hover) {
    &:hover {
      background-color: ${({ $active, theme }) => ($active ? theme.secondary : theme.secondary500)};
    }
  }
`;
