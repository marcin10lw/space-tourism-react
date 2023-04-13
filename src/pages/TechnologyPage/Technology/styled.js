import styled, { css } from "styled-components";
import { Description } from "../../../components/Description";

export const TechnologySection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 26px 0 0 11.5%;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    flex-direction: column-reverse;
    gap: 60px;
    padding: 60px 0 97px;
  }
`;

export const TechnologyArticle = styled.article`
  display: flex;
  gap: 80px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    flex-direction: column;
    gap: 44px;
    text-align: center;
  }
`;

export const TechnologyNavList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    flex-direction: row;
    justify-content: center;
    gap: 16px;
  }
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

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: 60px;
    height: 60px;
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

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    margin: 16px 0 16px;
    font-size: 40px;
  }
`;

export const TechnologyDescription = styled(Description)`
  max-width: 444px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    max-width: 458px;
  }
`;

export const TechnologyImage = styled.img`
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: 102%;
  }
`;
