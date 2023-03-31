import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavbar = styled.nav`
  height: 96px;
  display: flex;
  align-items: center;
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

export const ListElement = styled.li`
  height: 100%;
`;

export const Number = styled.span`
  margin-right: 12px;
  font-weight: 700;
`;

export const StyledNavLink = styled(NavLink)`
  color: inherit;
  text-decoration: none;
  letter-spacing: 2.7px;
`;
