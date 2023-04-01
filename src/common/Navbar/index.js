import { useState } from "react";
import {
  LinksList,
  ListElement,
  Number,
  StyledNavbar,
  StyledNavLink,
  OpenMenuButton,
  CloseMenuButton,
  BackDrop,
} from "./styled";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <BackDrop isMenuOpen={isMenuOpen} onClick={() => setIsMenuOpen(false)} />
      <OpenMenuButton onClick={() => setIsMenuOpen(true)} />
      <StyledNavbar isMenuOpen={isMenuOpen}>
        <CloseMenuButton onClick={() => setIsMenuOpen(false)} />
        <LinksList onClick={() => setIsMenuOpen(false)}>
          <ListElement>
            <StyledNavLink to="/home">
              <Number>00</Number>
              HOME
            </StyledNavLink>
          </ListElement>

          <ListElement>
            <StyledNavLink to="/destination">
              <Number>01</Number>
              DESTINATION
            </StyledNavLink>
          </ListElement>

          <ListElement>
            <StyledNavLink to="/crew">
              <Number>00</Number>
              CREW
            </StyledNavLink>
          </ListElement>

          <ListElement>
            <StyledNavLink to="/technology">
              <Number>00</Number>
              TECHNOLOGY
            </StyledNavLink>
          </ListElement>
        </LinksList>
      </StyledNavbar>
    </>
  );
};

export default Navbar;
