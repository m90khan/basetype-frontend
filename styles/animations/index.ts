export const slideInUp = {
  init: {
    width: '100%',
    y: '100%',
    background: 'black',
  },
  enter: {
    y: ['100%', '0%', '0%'],
    borderRadius: ['0px 0px 0px 0px', '0px 0px 0px 0px', '8px 8px 0px 0px'],
  },
  exit: { y: '100%', transition: { duration: 0.5 } },
};

export const scaleDown = {
  init: {
    scaleY: 1,
  },
  enter: {
    scaleY: 0,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    scaleY: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export const draw = {
  init: { pathLength: 0, opacity: 0 },
  exit: { pathLength: 0, opacity: 0 },
  enter: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { type: 'spring', duration: 0.5, bounce: 0 },
      opacity: { duration: 0.01 },
    },
  },
};
