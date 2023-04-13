import styled, { css } from "styled-components";
import { Description } from "../../../components/Description";

export const CrewSection = styled.section`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  align-items: center;
  font-family: "Bellefair", sans-serif;
  padding: 154px 0 0 11.5%;
`;

export const CrewArticle = styled.article`
  z-index: 999;
`;

export const CrewTitle = styled.div`
  font-size: 32px;
  opacity: 0.5;
`;

export const CrewName = styled.h2`
  font-size: 56px;
  font-weight: 400;
  margin: 15px 0 27px;
`;

export const CrewDescription = styled(Description)`
  max-width: 444px;
  height: 160px;
`;

export const CrewNavigation = styled.nav`
  margin-top: 88px;
`;

export const CrewNavigationList = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const CrewButton = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.colors.white};
  opacity: 0.18;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }

  ${({ isActive }) =>
    isActive &&
    css`
      opacity: 1;

      &:hover {
        opacity: 1;
      }
    `}
`;

export const CrewImage = styled.img`
  min-height: 712px;
  position: absolute;
  right: 9.5%;
  bottom: -2px;
`;
