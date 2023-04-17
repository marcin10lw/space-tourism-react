import { motion } from "framer-motion";
import Heading from "../../components/Heading";
import { Main } from "../../components/Main";
import Crew from "./Crew";
import { crewVariants } from "./variants";

const CrewPage = () => {
  return (
    <Main
      as={motion.main}
      variants={crewVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Heading number="02" content="meet your crew" />
      <Crew />
    </Main>
  );
};

export default CrewPage;
