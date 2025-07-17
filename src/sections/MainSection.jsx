import Socials from "../components/Socials";
import { GrDocumentUser } from "react-icons/gr";
import { motion } from "motion/react";
import { fadeIn } from "../utils/animations";

export default function MainSection() {
  return (
    <section className="w-full flex">
      <div className="flex flex-col gap-5 w-2/3">
        <motion.h1
          {...fadeIn}
          className="text-6xl text-white font-bold"
        >
          Ilya Holuban
        </motion.h1>
        <motion.h2
          {...fadeIn}
          className="text-3xl"
        >
          Front End Engineer
        </motion.h2>
        <h3 className="text-xl leading-9 text-neutral-400">
          I'm <strong>Ilya Holuban</strong>, Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Nam quibusdam non deleniti quo, qui
          alias accusantium labore voluptatum officia, ea nemo at harum
          doloremque nulla molestias quidem nisi sint similique?
        </h3>
        <Socials />
      </div>
      <div className="w-1/3 flex flex-col justify-center items-center gap-5">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-[400px] h-[300px] bg-accent flex items-center justify-center text-black text-3xl"
        >
          image
        </motion.div>
        <a
          href="https://drive.google.com/file/d/1Q1kmHFldK6Upsl_9_vdSt701G1cz2KTA/view?usp=sharing"
          target="_blank"
          className="border-b-1 flex gap-3 items-center hover:text-accent transition py-1 text-xl shadow-xl shadow-neutral-900 "
        >
          Download CV <GrDocumentUser className="text-xl" />
        </a>
      </div>
    </section>
  );
}
