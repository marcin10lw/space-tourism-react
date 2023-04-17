import { motion } from "framer-motion";
import { StyledHeading, HeadingNumber } from "./styled";

const Heading = ({ number, content }) => {
  return (
    <StyledHeading>
      {number && <HeadingNumber>{number}</HeadingNumber>}
      {content.toUpperCase()}
    </StyledHeading>
  );
};

export default Heading;
