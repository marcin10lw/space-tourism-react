import styled from "styled-components";

export const HomeSection = styled.section`
  width: 100%;
  margin-top: 250px;
  display: grid;
  grid-template-columns: 450px auto;
  align-items: center;
  justify-content: space-around;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    margin: 106px 0 90px;
    grid-template-columns: 450px;
    text-align: center;
    gap: 156px;
  }
`;

export const HomeArticle = styled.article``;

export const HomeTitle = styled.h2`
  font-family: "Bellefair", sans-serif;
  font-size: 150px;
  margin: 24px 0;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.white};
`;

export const Button = styled.button`
  height: 274px;
  width: 274px;
  border: none;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.white};
  align-self: end;
  font-size: 32px;
  letter-spacing: 2px;
  font-family: "Bellefair", sans-serif;
  cursor: pointer;
  position: relative;

  &:after {
    content: "";
    display: block;
    width: 274px;
    height: 274px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.white};
    opacity: 0.1;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
    transition: width 200ms ease-in-out, height 200ms ease-in-out;
  }

  &:hover {
    &:after {
      content: "";
      width: 450px;
      height: 450px;
      pointer-events: none;

      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        display: none;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    margin: auto;
    width: 242px;
    height: 242px;
  }
`;
