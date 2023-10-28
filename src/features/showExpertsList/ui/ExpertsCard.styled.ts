import styled from "styled-components";
import { Link } from "react-router-dom";
import { media } from "src/shared/config";

export const Card = styled.li``;

export const CardLink = styled(Link)``;

export const CardInner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  position: relative;
  padding-top: 100%;
  margin-bottom: 8px;
  overflow: hidden;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.primary500};
`;

export const AvatarWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  transition: transform 0.3s ease-in-out;

  @media (hover: hover) {
    &:hover {
      transform: scale(1.2);
    }
  }
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;

  object-fit: cover;
`;

export const NameWrap = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: nowrap;

  margin-bottom: 4px;
  overflow: hidden;
`;

export const Name = styled.span`
  font-size: 14px;
  font-weight: 500;
  line-height: 100%;
  white-space: nowrap;

  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Age = styled(Name)`
  overflow: visible;
`;

export const Online = styled.div`
  flex-shrink: 0;
  width: 8px;
  height: 8px;
  margin-left: 4px;

  border-radius: 50%;
  background-color: ${({ theme }) => theme.online};
`;

export const SubjectsWrap = styled.div`
  display: flex;
  flex-wrap: nowrap;

  overflow: hidden;
`;

export const Subject = styled.span`
  font-size: 12px;
  font-style: italic;
  font-weight: 500;
  line-height: 100%;
  white-space: nowrap;
  color: ${({ theme }) => theme.primary600};

  overflow: hidden;
  text-overflow: ellipsis;
`;

export const MoreSubject = styled(Subject)`
  display: none;

  ${media.greaterThan("laptop")`
    display: block;
    opacity: 0.5;
    overflow: visible;
  `};
`;
