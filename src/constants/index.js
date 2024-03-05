import {
  ant,
  contact,
  css,
  docker,
  git,
  github,
  html,
  javascript,
  less,
  linkedin,
  mui,
  pokeball,
  react,
  redux,
  summiz,
  tailwindcss,
  typescript,
} from "../assets/icons";
import { ulam } from "../assets/images";

export const skills = [
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: less,
    name: "less",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: docker,
    name: "Docker",
    type: "Frontend",
  },
  {
    imageUrl: ant,
    name: "Ant Design",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Junior Frontend Developer",
    company_name: "ULAM Labs",
    icon: ulam,
    iconBg: "#E00766",
    date: "February 2023 - Current",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/Mikssxed",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/wojciech-mas%C5%82owski-654989261/",
  },
];

export const projects = [
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "AI Summarizer Application",
    description:
      "App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.",
    link: "https://github.com/Mikssxed/ai-summarizer",
  },
  {
    iconUrl: pokeball,
    theme: "btn-back-pink",
    name: "Pokemon Team Battler (IN PROGRESS)",
    description:
      "App that allows you to create pokemon team and test it against one of the strongest team",
    link: "https://github.com/Mikssxed/pokemon-app",
  },
];
