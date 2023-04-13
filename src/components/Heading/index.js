import { motion } from "framer-motion";
import { StyledHeading, HeadingNumber } from "./styled";

const Heading = ({ number, content }) => {
  return (
    <StyledHeading
      as={motion.h1}
      initial={{ opacity: 0, x: -window.innerWidth }}
      animate={{
        opacity: 1,
        x: 0,
        transition: { duration: 0.3, delay: 0.2 },
      }}
    >
      {number && <HeadingNumber>{number}</HeadingNumber>}
      {content.toUpperCase()}
    </StyledHeading>
  );
};

export default Heading;
