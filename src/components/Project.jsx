import React from "react";
import { motion } from "motion/react";
import { staggerItem } from "../utils/animations";
export default function Project({ name, desc, technologies, imgPath }) {
  return <motion.div variants={staggerItem}>Project</motion.div>;
}
