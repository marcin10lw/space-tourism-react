import { motion } from "framer-motion";
import Destination from "../../components/Destination";
import Heading from "../../components/Heading";
import { Main } from "../../components/Main";

const DestinationPage = () => {
  return (
    <Main
      as={motion.main}
      initial={{ opacity: 0, y: window.innerHeight }}
      animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
      exit={{
        y: 100,
        opacity: 0,
        transition: { duration: 0.1 },
      }}
    >
      <Heading number="01" content="Pick your destination" />
      <Destination />
    </Main>
  );
};

export default DestinationPage;
