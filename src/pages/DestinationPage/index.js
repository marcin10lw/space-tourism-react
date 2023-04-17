import { motion } from "framer-motion";
import Destination from "./Destination";
import Heading from "../../components/Heading";
import { Main } from "../../components/Main";
import { destinationVariants } from "./variants";

const DestinationPage = () => {
  return (
    <Main
      as={motion.main}
      variants={destinationVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Heading number="01" content="Pick your destination" />
      <Destination />
    </Main>
  );
};

export default DestinationPage;
