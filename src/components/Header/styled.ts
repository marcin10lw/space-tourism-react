import styled from "styled-components";

export const StyledHeader = styled.header`
  padding: 40px 0 0 55px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    padding: 0 0 0 40px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    padding: 24px 0 0 24px;
  }
`;

export const Logo = styled.img`
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    width: 40px;
    height: 40px;
  }
`;

export const DecorationLine = styled.div`
  height: 1px;
  background-color: ${({ theme }) => theme.colors.white};
  opacity: 0.25;
  margin: 0 -35px 0 64px;
  z-index: 99;
  flex-basis: 50%;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    display: none;
  }
`;
