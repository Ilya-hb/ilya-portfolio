export const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
  viewport: { once: true },
};

export const slideUp = {
  initial: { opacity: 0, y: 40, scale: 0.8 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  transition: { duration: 0.6 },
  viewport: { once: true },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  viewport: { once: true },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};
export const staggerItem = {
  viewport: { once: true },
  hidden: { opacity: 0, scale: 1 },
  show: { opacity: 1, scale: 1 },
};
