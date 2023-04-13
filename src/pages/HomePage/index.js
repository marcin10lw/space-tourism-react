import { Main } from "../../components/Main";
import Heading from "../../components/Heading";
import { Button, HomeArticle, HomeHeading, HomeSection, HomeTitle } from "./styled";
import { Description } from "../../components/Description";
import description from "./description";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const HomePage = () => {
  const navigate = useNavigate();

  const onButtonClick = () => {
    navigate("/destination");
  };

  return (
    <Main
      as={motion.main}
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0, transition: { duration: 0.2, delay: 0.2 } }}
      exit={{
        x: -100,
        opacity: 0,
        transition: { duration: 0.2 },
      }}
    >
      <HomeSection>
        <article>
          <HomeHeading>SO, YOU WANT TO TRAVEL TO</HomeHeading>
          <HomeTitle>SPACE</HomeTitle>
          <Description>{description}</Description>
        </article>
        <Button onClick={onButtonClick}>EXPLORE</Button>
      </HomeSection>
    </Main>
  );
};

export default HomePage;
