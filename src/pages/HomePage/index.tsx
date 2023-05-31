import { Main } from "../../components/Main";
import { Button, HomeHeading, HomeSection, HomeTitle } from "./styled";
import { Description } from "../../components/Description";
import description from "./description";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { buttonVariants, homeVariants } from "./variants";

const HomePage = () => {
  const navigate = useNavigate();

  const onButtonClick = () => {
    navigate("/destination");
  };

  return (
    <Main
      as={motion.main}
      variants={homeVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <HomeSection>
        <article>
          <HomeHeading>SO, YOU WANT TO TRAVEL TO</HomeHeading>
          <HomeTitle>SPACE</HomeTitle>
          <Description>{description}</Description>
        </article>
        <Button
          as={motion.button}
          variants={buttonVariants}
          onClick={onButtonClick}
        >
          EXPLORE
        </Button>
      </HomeSection>
    </Main>
  );
};

export default HomePage;
