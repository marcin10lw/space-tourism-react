import { Main } from "../../components/Main";
import Heading from "../../components/Heading";
import { Button, HomeArticle, HomeSection, HomeTitle } from "./styled";
import Description from "../../components/Description";
import description from "./description";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const HomePage = () => {
  const navigate = useNavigate();

  const onButtonClick = () => {
    navigate("/destination");
  };

  return (
    <Main>
      <HomeSection
        as={motion.section}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ y: window.innerWidth, transition: { duration: 0.4 } }}
      >
        <HomeArticle>
          <Heading content="so, you want to travel to" />
          <HomeTitle>SPACE</HomeTitle>
          <Description description={description} />
        </HomeArticle>
        <Button onClick={onButtonClick}>EXPLORE</Button>
      </HomeSection>
    </Main>
  );
};

export default HomePage;
