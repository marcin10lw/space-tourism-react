import { DecorationLine, Logo, StyledHeader } from "./styled";
import logo from "../../assets/shared/logo.svg";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <StyledHeader>
      <Link to="/home">
        <Logo src={logo} alt="logo" />
      </Link>
      <DecorationLine />
      <Navbar />
    </StyledHeader>
  );
};

export default Header;
