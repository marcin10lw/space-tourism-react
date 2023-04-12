import styled, { css } from "styled-components";
import { Description } from "../Description";

export const DestinationSection = styled.section`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 445px));
  justify-content: space-around;
  align-items: center;
  padding-top: 64px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    padding: 60px 0;
    grid-template-columns: minmax(0, 573px);
    gap: 53px;
    text-align: center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    padding: 32px 0 58px;
    gap: 26px;
  }
`;

export const DestinationImage = styled.img`
  margin: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    max-width: 300px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    max-width: 170px;
  }
`;

export const DestinationArticle = styled.article``;

export const DestinationList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  align-items: center;
  gap: 36px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    justify-content: center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    gap: 26px;
  }
`;

export const DestinationButton = styled.button`
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.blue};
  letter-spacing: 2.7px;
  padding: 0 0 12px;
  cursor: pointer;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    padding: 0 0 8px;
    font-size: 14px;
    letter-spacing: 2.36px;
  }

  &:hover {
    &:before {
      content: "";
      display: block;
      height: 3px;
      width: 100%;
      background-color: ${({ theme }) => theme.colors.white};
      opacity: 0.5;
      position: absolute;
      bottom: 0px;
    }
  }

  ${({ isActive }) =>
    isActive &&
    css`
      color: ${({ theme }) => theme.colors.white};

      &:after {
        content: "";
        display: block;
        height: 3px;
        width: 100%;
        background-color: ${({ theme }) => theme.colors.white};
        position: absolute;
        bottom: 0px;
      }
    `};
`;

export const DestinationTitle = styled.h2`
  margin: 37px 0 14px;
  font-family: "Bellefair", sans-serif;
  font-weight: 400;
  font-size: 100px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 80px;
    margin: 32px 0 8px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    margin: 22px 0 1px;
    font-size: 56px;
  }
`;

export const DestinationDescription = styled(Description)`
  padding-bottom: 54px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.brightGrey};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    padding-bottom: 50px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    padding-bottom: 32px;
  }
`;

export const DestinationExtraInfoWrapepr = styled.div`
  margin-top: 28px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    grid-template-columns: auto;
    gap: 32px;
  }
`;

export const DestinationExtraInfo = styled.div`
  font-size: 14px;
  letter-spacing: 2.36px;
  color: ${({ theme }) => theme.colors.blue};
`;

export const DestinationExtraValue = styled.div`
  font-family: "Bellefair", sans-serif;
  font-size: 28px;
  margin-top: 12px;
  color: ${({ theme }) => theme.colors.white};
`;
