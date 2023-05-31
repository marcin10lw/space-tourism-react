import { motion } from "framer-motion";
import Heading from "../../components/Heading";
import { Main } from "../../components/Main";
import Technology from "./Technology";
import { articleVariants, technologyVariants } from "./variants";

const TechnologyPage = () => {
  return (
    <Main technology as={motion.main} variants={technologyVariants} exit="exit">
      <motion.div variants={articleVariants} initial="hidden" animate="visible">
        <Heading number="03" content="SPACE LAUNCH 101" />
      </motion.div>
      <Technology />
    </Main>
  );
};

export default TechnologyPage;
