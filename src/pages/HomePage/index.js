import { Main } from "../../components/Main";
import Heading from "../../components/Heading";
import { Button, HomeArticle, HomeSection, HomeTitle } from "./styled";
import Description from "../../components/Description";
import description from "./description";

const HomePage = () => {
  return (
    <Main>
      <HomeSection>
        <HomeArticle>
          <Heading content="so, you want to travel to" />
          <HomeTitle>SPACE</HomeTitle>
          <Description description={description} />
        </HomeArticle>
        <Button>EXPLORE</Button>
      </HomeSection>
    </Main>
  );
};

export default HomePage;
