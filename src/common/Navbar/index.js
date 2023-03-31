import {
  LinksList,
  ListElement,
  Number,
  StyledNavbar,
  StyledNavLink,
} from "./styled";

const Navbar = () => {
  return (
    <StyledNavbar>
      <LinksList>
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
  );
};

export default Navbar;
