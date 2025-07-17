import React from "react";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { SiFramer } from "react-icons/si";
import { FaGitSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { motion } from "motion/react";
import { slideUp, staggerContainer, staggerItem } from "../utils/animations";

export default function SkillsSection() {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      variants={staggerContainer}
      className="flex px-30"
    >
      <h2 className="text-accent text-4xl font-bold w-1/3">Skills</h2>
      <div className="w-2/3 flex flex-wrap justify-around items-center space-y-5 gap-5 ">
        <motion.div
          className="flex flex-col items-center gap-1 skillsIcon skillsIcon"
          variants={staggerItem}
        >
          <FaJs className="text-6xl" />
          JavaScript
        </motion.div>

        <motion.div
          variants={staggerItem}
          className="flex flex-col items-center gap-1 skillsIcon"
        >
          <FaReact className="text-6xl" />
          React
        </motion.div>

        <motion.div
          variants={staggerItem}
          className="flex flex-col items-center gap-1 skillsIcon"
        >
          <SiRedux className="text-6xl" />
          Redux
        </motion.div>

        <motion.div
          variants={staggerItem}
          className="flex flex-col items-center gap-1 skillsIcon"
        >
          <RiTailwindCssFill className="text-6xl" />
          TailwindCSS
        </motion.div>

        <motion.div
          variants={staggerItem}
          className="flex flex-col items-center gap-1 skillsIcon"
        >
          <FaHtml5 className="text-6xl" />
          HTML
        </motion.div>

        <motion.div
          variants={staggerItem}
          className="flex flex-col items-center gap-1 skillsIcon"
        >
          <FaCss3 className="text-6xl" />
          CSS
        </motion.div>

        <motion.div
          variants={staggerItem}
          className="flex flex-col items-center gap-1 skillsIcon"
        >
          <FaSass className="text-6xl" />
          Sass
        </motion.div>

        <motion.div
          variants={staggerItem}
          className="flex flex-col items-center gap-1 skillsIcon"
        >
          <SiFramer className="text-6xl" />
          Motion
        </motion.div>

        <motion.div
          variants={staggerItem}
          className="flex flex-col items-center gap-1 skillsIcon"
        >
          <FaGitSquare className="text-6xl" />
          Git
        </motion.div>

        <motion.div
          variants={staggerItem}
          className="flex flex-col items-center gap-1 skillsIcon mb-5"
        >
          <FaGithub className="text-6xl" />
          Github
        </motion.div>
      </div>
    </motion.section>
  );
}
