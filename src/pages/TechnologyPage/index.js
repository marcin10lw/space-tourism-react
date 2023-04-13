import { motion } from "framer-motion";
import Heading from "../../components/Heading";
import { Main } from "../../components/Main";
import Technology from "./Technology";

const TechnologyPage = () => {
  return (
    <Main
      technology
      as={motion.main}
      exit={{
        x: 100,
        opacity: 0,
        transition: { duration: 0.2 },
      }}
    >
      <Heading number="03" content="SPACE LAUNCH 101" />
      <Technology />
    </Main>
  );
};

export default TechnologyPage;
