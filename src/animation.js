export const popup = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    scale: 0,
    transition: { ease: "easeOut", duration: 0.5 },
  },
};

export const titleAnimation = {
  hidden: {
    opacity: 0,
    y: -100,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.75,
    },
  },
  exit: {
    opacity: 0,
    scale: 0,
    transition: { ease: "easeOut", duration: 0.5 },
  },
};
