export const crewVariants = {
  hidden: {
    opacity: 0,
    y: 150,
    transition: {
      duration: 0.2,
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      delay: 0.2,
      duration: 0.4,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    y: 150,
    transition: {
      ease: "easeInOut",
      duration: 0.2,
      when: "afterChildren",
    },
  },
};

export const imageVariants = {
  hidden: {
    scale: 0.4,
    opacity: 0,
    y: "100vh",
  },
  visible: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      type: "linear",
      ease: "easeInOut",
      duration: 0.25,
    },
  },
  exit: {
    scale: 0.4,
    opacity: 0,
    y: "100vh",
    transition: {
      duration: 0.4,
    },
  },
};
