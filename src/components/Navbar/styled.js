import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import hamburgerIcon from "../../assets/shared/icon-hamburger.svg";
import closeIcon from "../../assets/shared/icon-close.svg";

export const BackDrop = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  ${({ isMenuOpen }) =>
    isMenuOpen &&
    css`
      display: block;
    `}
`;

export const StyledNavbar = styled.nav`
  flex-basis: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(40.7742px);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    display: block;
    position: fixed;
    z-index: 999;
    width: 68%;
    top: 0;
    bottom: 0;
    right: -100%;
    transition: right 300ms ease-in-out;

    ${({ isMenuOpen }) =>
      isMenuOpen &&
      css`
        right: 0;
      `}
  }
`;

export const OpenMenuButton = styled.button`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    display: block;
    width: 24px;
    height: 21px;
    border: none;
    background: center / cover url(${hamburgerIcon});
    margin-right: 24px;
    cursor: pointer;
  }
`;

export const CloseMenuButton = styled.button`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    display: block;
    width: 19px;
    height: 19px;
    border: none;
    background: center / cover url(${closeIcon});
    position: absolute;
    top: 34px;
    right: 26px;
    cursor: pointer;
  }
`;

export const LinksList = styled.ul`
  padding: 0;
  margin: 0 165px 0 123px;
  list-style: none;
  display: flex;
  align-items: center;
  gap: 48px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    margin: 0 48px;
    gap: 37px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    flex-direction: column;
    align-items: flex-start;
    margin: 113px 0 0;
    gap: 20px;
  }
`;

export const ListElement = styled.li`
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    width: 100%;
  }
`;

export const Number = styled.span`
  margin-right: 12px;
  font-weight: 700;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    display: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    display: inline-block;
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
      background-color: ${({ theme }) => theme.colors.white};
      opacity: 0.5;
      position: absolute;
      left: 0;
      bottom: 0;
      z-index: 1;

      @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        display: none;
      }
    }
  }

  &.active {
    &:after {
      content: "";
      display: block;
      width: 100%;
      height: 3px;
      background-color: ${({ theme }) => theme.colors.white};
      position: absolute;
      left: 0;
      bottom: 0;
      z-index: 100;

      @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        width: 4px;
        height: 100%;
        right: 0;
        left: auto;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    letter-spacing: 2.36px;
    font-size: 14px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    letter-spacing: 2.7px;
    font-size: 16px;
    padding: 6px 0 6px 32px;
  }
`;
