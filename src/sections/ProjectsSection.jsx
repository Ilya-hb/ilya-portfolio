import React from "react";
import { motion } from "motion/react";
import { slideUp, staggerContainer } from "../utils/animations";
import Project from "../components/Project";

export default function ProjectsSection() {
  return (
    <motion.section
      {...slideUp}
      className="flex px-30"
    >
      <h2 className="text-accent text-4xl font-bold w-1/3 ">Projects</h2>
      <motion.div
        className="w-2/3"
        initial="hidden"
        whileInView="show"
        variants={staggerContainer}
      >
        <Project
          name="Kastom reviews"
          desc="Fullstack MERN Application that allows...lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum"
          imgPath=""
          technologies=""
        />
        <Project
          name="Kastom reviews"
          desc="Fullstack MERN Application that allows...lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum"
          imgPath=""
          technologies=""
        />
        <Project
          name="Kastom reviews"
          desc="Fullstack MERN Application that allows...lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum"
          imgPath=""
          technologies=""
        />
        <Project
          name="Kastom reviews"
          desc="Fullstack MERN Application that allows...lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum"
          imgPath=""
          technologies=""
        />
        <Project
          name="Kastom reviews"
          desc="Fullstack MERN Application that allows...lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum"
          imgPath=""
          technologies=""
        />
        <Project
          name="Kastom reviews"
          desc="Fullstack MERN Application that allows...lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum"
          imgPath=""
          technologies=""
        />
      </motion.div>
    </motion.section>
  );
}
