import Destination from "../../components/Destination";
import Heading from "../../components/Heading";
import { Main } from "../../components/Main";

const DestinationPage = () => {
  return (
    <Main>
      <Heading number="01" content="Pick your destination" />
      <Destination />
    </Main>
  );
};

export default DestinationPage;
