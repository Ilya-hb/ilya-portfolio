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

export default function SkillsSection() {
  return (
    <section className="flex px-30">
      <h2 className="text-accent text-4xl font-bold w-1/3">Skills</h2>
      <div className="w-2/3 flex flex-wrap justify-around items-center space-y-5 gap-10 ">
        <div className="flex flex-col items-center gap-1 skillsIcon">
          <FaJs className="text-6xl" />
          JavaScript
        </div>

        <div className="flex flex-col items-center gap-1">
          <FaReact className="text-6xl" />
          React
        </div>

        <div className="flex flex-col items-center gap-1">
          <SiRedux className="text-6xl" />
          Redux
        </div>

        <div className="flex flex-col items-center gap-1">
          <RiTailwindCssFill className="text-6xl" />
          TailwindCSS
        </div>

        <div className="flex flex-col items-center gap-1">
          <FaHtml5 className="text-6xl" />
          HTML
        </div>

        <div className="flex flex-col items-center gap-1">
          <FaCss3 className="text-6xl" />
          CSS
        </div>

        <div className="flex flex-col items-center gap-1">
          <FaSass className="text-6xl" />
          Sass
        </div>

        <div className="flex flex-col items-center gap-1">
          <SiFramer className="text-6xl" />
          Motion
        </div>

        <div className="flex flex-col items-center gap-1">
          <FaGitSquare className="text-6xl" />
          Git
        </div>
        <div className="flex flex-col items-center gap-1">
          <FaGithub className="text-6xl" />
          Github
        </div>
      </div>
    </section>
  );
}
