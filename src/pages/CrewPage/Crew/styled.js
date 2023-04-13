import styled, { css } from "styled-components";
import { Description } from "../../../components/Description";

export const CrewSection = styled.section`
  font-family: "Bellefair", sans-serif;
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  align-items: center;
  padding: 154px 0 94px 11.5%;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    grid-template-columns: auto;
    justify-content: center;
    padding: 60px 0 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    padding: 32px 0 104px;
    gap: 32px;
  }
`;

export const CrewArticle = styled.article`
  z-index: 999;
  display: flex;
  flex-direction: column;
  gap: 88px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    text-align: center;
    gap: 40px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    grid-row: 2 / 3;
    flex-direction: column-reverse;
    z-index: auto;
    gap: 32px;
  }
`;

export const CrewTitle = styled.div`
  font-size: 32px;
  opacity: 0.5;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 16px;
  }
`;

export const CrewName = styled.h2`
  font-size: 56px;
  font-weight: 400;
  margin: 15px 0 27px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 40px;
    margin: 8px 0 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 24px;
  }
`;

export const CrewDescription = styled(Description)`
  max-width: 444px;
  height: 160px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    max-width: 592px;
    height: 84px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    height: auto;
  }
`;

export const CrewNavigationList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    justify-content: center;
    gap: 16px;
  }
`;

export const CrewButton = styled.button`
  padding: 0;
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

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: 10px;
    height: 10px;
  }
`;

export const ImageWrapper = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    position: relative;
    min-height: 223px;
    grid-row: 1 / 2;
    border-bottom: 1px solid ${({ theme }) => theme.colors.brightGrey};
  }
`;

export const CrewImage = styled.img`
  position: absolute;
  max-height: 78%;
  right: 9.5%;
  bottom: -2px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    left: 50%;
    transform: translateX(-50%) !important;
    max-height: 45%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    bottom: 0;
    height: 100%;
    max-height: 223px;
  }
`;
