import styled from "styled-components";

export const HomeSection = styled.section`
  width: 100%;
  padding: 250px 0 130px;
  display: grid;
  grid-template-columns: minmax(0, 450px) auto;
  align-items: center;
  justify-content: space-around;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    padding: 106px 0 90px;
    grid-template-columns: minmax(0, 450px);
    text-align: center;
    gap: 156px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    padding: 48px 0;
    gap: 80px;
  }
`;

export const HomeHeading = styled.h1`
  font-size: 28px;
  letter-spacing: 4.72px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.blue};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 20px;
    letter-spacing: 3.38px;
    margin: 40px 0 0 38.5px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 16px;
    letter-spacing: 2.7px;
    margin: 24px 0 0;
    text-align: center;
  }
`;

export const HomeTitle = styled.h2`
  font-family: "Bellefair", sans-serif;
  font-size: 150px;
  margin: 24px 0;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 80px;
    margin: 16px 0;
  }
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

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
      display: none;
    }
  }

  &:hover {
    &:after {
      content: "";
      width: 450px;
      height: 450px;
      pointer-events: none;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    margin: auto;
    width: 242px;
    height: 242px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    width: 150px;
    height: 150px;
    font-size: 20px;
    letter-spacing: 1.25px;
  }
`;
