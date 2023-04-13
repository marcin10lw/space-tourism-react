import styled, { css } from "styled-components";
import { Description } from "../../../components/Description";

export const TechnologySection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 26px 0 0 11.5%;
`;

export const TechnologyArticle = styled.article`
  display: flex;
  gap: 80px;
`;

export const TechnologyNavList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const TechnologyButton = styled.button`
  padding: 0;
  width: 80px;
  height: 80px;
  font-family: "Bellefair", sans-serif;
  font-size: 32px;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.colors.white};
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.transparentWhite};
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.white};
  }

  ${({ isActive }) =>
    isActive &&
    css`
      color: ${({ theme }) => theme.colors.vulcan};
      background-color: ${({ theme }) => theme.colors.white};
    `}
`;

export const TechnologyName = styled.div`
  letter-spacing: 2.7px;
  color: ${({ theme }) => theme.colors.blue};
`;

export const TechnologyTitle = styled.h2`
  font-family: "Bellefair", sans-serif;
  font-weight: 400;
  font-size: 56px;
  color: ${({ theme }) => theme.colors.white};
  margin: 11px 0 17px;
`;

export const TechnologyDescription = styled(Description)`
  max-width: 444px;
`;

export const TechnologyImage = styled.img``;
