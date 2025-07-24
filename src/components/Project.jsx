import { motion } from "motion/react";
import { staggerItem } from "../utils/animations";
import { RxExternalLink } from "react-icons/rx";
import { FaGithub } from "react-icons/fa";

export default function Project({ project }) {
  return (
    <motion.div
      className="bg-neutral-900 shadow-black shadow-xl px-10 py-10 space-y-5 rounded-xl"
      variants={staggerItem}
    >
      <img
        className="max-w-[500px] rounded-xl"
        src={project.img}
        alt={project.title}
      />
      <h3 className="text-center font-semibold text-3xl">{project.title}</h3>
      <p className="text-neutral-400 ">{project.desc}</p>
      <div className="flex flex-wrap items-center gap-3">
        {project.tech.map((el) => (
          <span className="px-2 py-1 bg-neutral-700 border-accent  rounded-md ">
            {el}
          </span>
        ))}
      </div>
      <div className="flex w-full justify-end gap-4 text-neutral-400">
        <a
          target="_blank"
          href={project.repoLink}
        >
          <FaGithub className="icon text-4xl" />
        </a>
        <a
          className=""
          target="_blank"
          href={project.demoLink}
        >
          <RxExternalLink className="icon text-4xl" />
        </a>
      </div>
    </motion.div>
  );
}
