import kastom from "../assets/kastom.png";
import x2 from "../assets/x2.png";
import { v4 as uuidv4 } from "uuid";

export const projects = [
  {
    id: uuidv4(),
    title: "Kastom Reviews",
    desc: "Kastom Reviews is an employee rating app. Customers can leave a review about an employee, and the administrator can view and manage employees and reviews.",
    img: kastom,
    tech: [
      "React",
      "Express",
      "Mongo",
      "Node",
      "JWT",
      "cors",
      "tailwindcss",
      "cloudinary",
      "multer",
      "react-router",
    ],
    demoLink: "https://kastom-reviews.vercel.app/",
    repoLink: "https://github.com/Ilya-hb/kastom-reviews",
    isFeatured: true,
  },
  {
    id: uuidv4(),
    title: "X2 Business Landing",
    desc: "X2 Company business landing page with internationalization, icons, animations, EmailJS Form and much more.",
    img: x2,
    tech: [
      "React",
      "Css",
      "tailwindcss",
      "JS",
      "i18-next",
      "framer-motion",
      "EmailJS",
      "hosting",
    ],
    demoLink: "https://boikocompany.com.ua/",
    repoLink: "",
    isFeatured: true,
  },
];
