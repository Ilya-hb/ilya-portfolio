import {
  FaGithub,
  FaLinkedinIn,
  FaTelegram,
  FaInstagram,
} from "react-icons/fa";

export default function Socials() {
  return (
    <div className="flex justify-around gap-5 w-fit text-4xl text-neutral-400">
      <a
        href="https://github.com/Ilya-hb"
        target="_blank"
      >
        <FaGithub className="icon" />
      </a>
      <a
        href="https://www.linkedin.com/in/ilya-holuban-392007226/"
        target="_blank"
      >
        <FaLinkedinIn className="icon" />
      </a>
      <a
        href="https://t.me/ilyh0"
        target="_blank"
      >
        <FaTelegram className="icon" />
      </a>
      <a
        href="https://www.instagram.com/ily_holu/"
        target="_blank"
      >
        <FaInstagram className="icon" />
      </a>
    </div>
  );
}
