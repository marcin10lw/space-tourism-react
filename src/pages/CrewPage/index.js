import { motion } from "framer-motion";
import Heading from "../../components/Heading";
import { Main } from "../../components/Main";
import Crew from "./Crew";

const CrewPage = () => {
  return (
    <Main
      as={motion.main}
      exit={{
        opacity: 0,
        transition: { duration: 0.2 },
      }}
    >
      <Heading number="02" content="meet your crew" />
      <Crew />
    </Main>
  );
};

export default CrewPage;
