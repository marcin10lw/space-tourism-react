import { DecorationLine, Logo, StyledHeader } from "./styled";
import logo from "../../assets/shared/logo.svg";
import Navbar from "../Navbar";

const Header = () => {
  return (
    <StyledHeader>
      <Logo src={logo} alt="logo" />
        <DecorationLine />
        <Navbar />
    </StyledHeader>
  );
};

export default Header;
