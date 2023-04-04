import styled, { css } from "styled-components";

export const DestinationSection = styled.section`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 445px));
  justify-content: space-around;
  align-items: center;
  padding-top: 64px;
`;

export const DestinationImage = styled.img``;

export const DestinationArticle = styled.article``;

export const DestinationList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  align-items: center;
  gap: 36px;
`;

export const DestinationButton = styled.button`
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.blue};
  letter-spacing: 2.7px;
  padding: 0 0 12px;
  cursor: pointer;
  position: relative;

  &:hover {
    &:before {
      content: "";
      display: block;
      height: 3px;
      width: 100%;
      background-color: ${({ theme }) => theme.colors.white};
      opacity: 0.5;
      position: absolute;
      bottom: 0;
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
        bottom: 0;
      }
    `};
`;

export const DestinationTitle = styled.h2`
  margin: 37px 0 14px;
  font-family: "Bellefair", sans-serif;
  font-weight: 400;
  font-size: 100px;
`;

export const DestinationExtraInfoWrapepr = styled.div``;

export const DestinationExtraInfo = styled.div``;

export const DestinationExtraValue = styled.div``;
