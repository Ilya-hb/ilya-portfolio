import { motion } from "motion/react";
import { slideUp } from "../utils/animations";
import Socials from "../components/Socials";

export default function FormSection() {
  return (
    <motion.section
      {...slideUp}
      className="flex px-30"
    >
      <h2 className="text-accent text-4xl font-bold w-1/3 ">Contact me!</h2>
      <div className="w-2/3">
        <Socials />
      </div>
    </motion.section>
  );
}
