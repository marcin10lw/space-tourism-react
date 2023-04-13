import { motion } from "framer-motion";
import Destination from "./Destination";
import Heading from "../../components/Heading";
import { Main } from "../../components/Main";

const DestinationPage = () => {
  return (
    <Main
      as={motion.main}
      initial={{ opacity: 0, x: window.innerWidth }}
      animate={{ opacity: 1, x: 0, transition: { duration: 0.4 } }}
      exit={{
        x: 100,
        opacity: 0,
        transition: { duration: 0.2, delay: 0.1 },
      }}
    >
      <Heading number="01" content="Pick your destination" />
      <Destination />
    </Main>
  );
};

export default DestinationPage;
