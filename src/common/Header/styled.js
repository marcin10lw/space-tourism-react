import styled from "styled-components";

const bpMobile = ({ theme }) => theme.breakpoints.mobile;
const bpTablet = ({ theme }) => theme.breakpoints.tablet;

export const StyledHeader = styled.header`
  padding: 40px 0 0 55px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${bpTablet}px) {
    padding: 0 0 0 40px;
  }
`;

export const Logo = styled.img``;

export const DecorationLine = styled.div`
  height: 1px;
  background-color: ${({ theme }) => theme.colors.white};
  opacity: 0.25;
  margin: 0 -35px 0 64px;
  z-index: 99;
  flex-basis: 50%;

  @media (max-width: ${bpTablet}px) {
    display: none;
  }
`;
