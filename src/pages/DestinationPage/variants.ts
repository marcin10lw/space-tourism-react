export const destinationVariants = {
  hidden: {
    opacity: 0,
    x: 150,
    transition: {
      duration: 0.2,
    },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.1,
      duration: 0.4,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    x: 150,
    transition: { ease: "easeInOut", duration: 0.2 },
  },
};

export const imageVariants = {
  hidden: {
    opacity: 0,
    x: -150,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
    },
  },
};
