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
  OpenMenuSwipe,
} from "./styled";
import { useSwipeable } from "react-swipeable";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenuHandlers = useSwipeable({
    onSwipedLeft: () => setIsMenuOpen(true),
  });

  const closeMenuHandlers = useSwipeable({
    onSwipedRight: () => setIsMenuOpen(false),
  });

  return (
    <>
      <OpenMenuSwipe {...openMenuHandlers} />
      <BackDrop isMenuOpen={isMenuOpen} onClick={() => setIsMenuOpen(false)} />
      <OpenMenuButton onClick={() => setIsMenuOpen(true)} />
      <StyledNavbar isMenuOpen={isMenuOpen} {...closeMenuHandlers}>
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
              <Number>02</Number>
              CREW
            </StyledNavLink>
          </ListElement>

          <ListElement>
            <StyledNavLink to="/technology">
              <Number>03</Number>
              TECHNOLOGY
            </StyledNavLink>
          </ListElement>
        </LinksList>
      </StyledNavbar>
    </>
  );
};

export default Navbar;
