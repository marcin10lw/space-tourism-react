import { Logo, StyledHeader } from "./styled";
import logo from "../../assets/shared/logo.svg";
import Navbar from "../Navbar";

const Header = () => {
  return (
    <StyledHeader>
      <Logo src={logo} alt="logo" />
      <Navbar />
    </StyledHeader>
  );
};

export default Header;
