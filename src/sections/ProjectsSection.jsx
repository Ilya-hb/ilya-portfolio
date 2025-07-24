import React from "react";
import { motion } from "motion/react";
import { slideUp, staggerContainer } from "../utils/animations";
import { projects } from "../data/projects";
import Project from "../components/Project";

export default function ProjectsSection() {
  return (
    <motion.section
      {...slideUp}
      className="flex px-30"
    >
      <h2 className="text-accent text-4xl font-bold w-1/3 ">
        Featured Projects
      </h2>
      <motion.div
        className="w-2/3 flex flex-wrap"
        initial="hidden"
        whileInView="show"
        variants={staggerContainer}
      >
        {projects.map((el) => (
          <Project
            key={el.id}
            project={el}
          />
        ))}
      </motion.div>
    </motion.section>
  );
}
