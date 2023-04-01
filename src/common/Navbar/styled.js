import { NavLink } from "react-router-dom";
import styled from "styled-components";

const white = ({ theme }) => theme.colors.white;
const bpMobile = ({ theme }) => theme.breakpoints.mobile;
const bpTablet = ({ theme }) => theme.breakpoints.tablet;

export const StyledNavbar = styled.nav`
  flex-basis: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(40.7742px);
`;

export const LinksList = styled.ul`
  padding: 0;
  margin: 0 165px 0 123px;
  list-style: none;
  display: flex;
  align-items: center;
  gap: 48px;

  @media (max-width: ${bpTablet}px) {
    margin: 0 48px;
    gap: 37px;
  }
`;

export const ListElement = styled.li``;

export const Number = styled.span`
  margin-right: 12px;
  font-weight: 700;

  @media (max-width: ${bpTablet}px) {
    display: none;
  }
`;

export const StyledNavLink = styled(NavLink)`
  display: block;
  padding: 38px 0;
  color: inherit;
  text-decoration: none;
  letter-spacing: 2.7px;
  position: relative;

  &:hover {
    &:before {
      content: "";
      display: block;
      width: 100%;
      height: 3px;
      background-color: ${white};
      opacity: 0.5;
      position: absolute;
      left: 0;
      bottom: 0;
      z-index: 1;
    }
  }

  &.active {
    &:after {
      content: "";
      display: block;
      width: 100%;
      height: 3px;
      background-color: ${white};
      position: absolute;
      left: 0;
      bottom: 0;
      z-index: 100;
    }
  }

  @media (max-width: ${bpTablet}px) {
    letter-spacing: 2.36px;
    font-size: 14px;
  }
`;
