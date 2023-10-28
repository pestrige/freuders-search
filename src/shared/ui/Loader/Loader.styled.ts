import styled from "styled-components";

import { ThemeKey } from "src/shared/config";

interface RootProps {
  $size: number;
  $absolute: boolean;
}

interface WrapperProps extends RootProps {
  $color: ThemeKey;
}

export const Root = styled.span<RootProps>`
  display: block;
  position: ${({ $absolute }) => ($absolute ? "absolute" : "relative")};
  width: ${({ $absolute, $size }) => ($absolute ? "100%" : `${$size}px`)};
  height: ${({ $absolute, $size }) => ($absolute ? "100%" : `${$size}px`)};
  ${({ $absolute }) =>
    $absolute &&
    `
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  `};
`;

export const Wrapper = styled.span<WrapperProps>`
  display: inline-block;
  position: relative;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;

  span {
    display: block;
    position: absolute;
    width: ${({ $size }) => Math.round((64 * $size) / 100)}px;
    height: ${({ $size }) => Math.round((64 * $size) / 100)}px;
    margin: ${({ $size }) => Math.round($size / 10)}px;

    border-width: ${({ $size }) => Math.round($size / 10)}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${({ $color, theme }) => `${theme[$color]} transparent transparent transparent`};
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  }

  span:nth-child(1) {
    animation-delay: -0.45s;
  }

  span:nth-child(2) {
    animation-delay: -0.3s;
  }

  span:nth-child(3) {
    animation-delay: -0.15s;
  }

  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`;
