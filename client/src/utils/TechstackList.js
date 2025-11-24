import {
  BsFiletypeHtml,
  BsFiletypeCss,
  BsBootstrap,
} from "react-icons/bs";
import { FaNodeJs } from "react-icons/fa";
import { FaJava } from "react-icons/fa6";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiExpress,
  SiGithub,
  SiPython,
  SiPostman,
  SiVercel,
  SiLinux,
  SiRender,
} from "react-icons/si";
import { MdOutlineApi } from "react-icons/md"; // REST API icon alternative
import { GiBrain } from "react-icons/gi"; // DSA/logic icon alternative

export const techstackList = [
  { _id: 1, name: "JavaScript", icon: SiJavascript },
  { _id: 2, name: "Python", icon: SiPython },
  { _id: 3, name: "Java", icon: FaJava },

  { _id: 4, name: "HTML", icon: BsFiletypeHtml },
  { _id: 5, name: "CSS", icon: BsFiletypeCss },
  { _id: 6, name: "Bootstrap", icon: BsBootstrap },
  { _id: 7, name: "Tailwind CSS", icon: SiTailwindcss },
  { _id: 8, name: "React JS", icon: SiReact },
  { _id: 9, name: "Next.js", icon: TbBrandNextjs },

  { _id: 10, name: "Node.js", icon: FaNodeJs },
  { _id: 11, name: "Express.js", icon: SiExpress },
  { _id: 12, name: "REST API", icon: MdOutlineApi },

  { _id: 13, name: "MongoDB", icon: SiMongodb },
  { _id: 14, name: "MySQL", icon: SiMysql },
  { _id: 15, name: "Firebase", icon: SiFirebase },


  { _id: 16, name: "Vercel", icon: SiVercel },
  { _id: 17, name: "Render", icon: SiRender },
  { _id: 18, name: "Linux", icon: SiLinux },


  { _id: 19, name: "Git / GitHub", icon: SiGithub },
  { _id: 20, name: "Postman", icon: SiPostman },

  
  { _id: 21, name: "DSA (Algorithms)", icon: GiBrain },
];
