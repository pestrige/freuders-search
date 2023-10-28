import styled from "styled-components";
import { media } from "src/shared/config";

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2px;

  position: absolute;
  top: 4px;
  left: 4px;
  width: 32px;
  height: 32px;
  padding: 2px;

  border-radius: 2px;
  background-color: ${({ theme }) => theme.white};

  ${media.greaterThan("laptop")`
    gap: 4px;
    top: 12px;
    left: 12px;
    width: 52px;
    height: 52px;
    padding: 4px;
  `};
`;

export const Title = styled.span`
  font-size: 4px;
  line-height: 100%;
  font-weight: 500;
  color: ${({ theme }) => theme.primary};

  ${media.greaterThan("laptop")`
    font-size: 8px;
  `};
`;

export const Subtitle = styled.span<{ $new: boolean }>`
  font-size: ${({ $new }) => ($new ? "16" : "6")}px;
  line-height: 100%;
  font-weight: 500;
  text-transform: uppercase;
  color: ${({ theme }) => theme.primary};

  ${media.greaterThan("laptop")`
    font-size: ${({ $new }: { $new: boolean }) => ($new ? "24" : "16")}px;
  `};
`;
