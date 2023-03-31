import { NavLink } from "react-router-dom";
import styled from "styled-components";

const white = ({ theme }) => theme.colors.white;

export const StyledNavbar = styled.nav`
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
`;

export const ListElement = styled.li``;

export const Number = styled.span`
  margin-right: 12px;
  font-weight: 700;
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
`;
