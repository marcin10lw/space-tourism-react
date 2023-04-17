export const homeVariants = {
  hidden: {
    opacity: 0,
    x: -150,
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
    x: -150,
    transition: { ease: "easeInOut", duration: 0.2 },
  },
};

export const buttonVariants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
    },
  },
};
