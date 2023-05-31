import { StyledHeading, HeadingNumber } from "./styled";

type HeadingProps = {
  number: string;
  content: string;
};

const Heading = ({ number, content }: HeadingProps) => {
  return (
    <StyledHeading>
      {number && <HeadingNumber>{number}</HeadingNumber>}
      {content.toUpperCase()}
    </StyledHeading>
  );
};

export default Heading;
