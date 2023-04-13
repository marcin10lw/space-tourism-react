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
      <motion.div
        initial={{ opacity: 0, x: -window.innerWidth }}
        animate={{
          opacity: 1,
          x: 0,
          transition: { duration: 0.5, delay: 0.2 },
        }}
      >
        <Heading number="02" content="meet your crew" />
      </motion.div>
      <Crew />
    </Main>
  );
};

export default CrewPage;
