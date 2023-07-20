import { Skill } from "../types/skill";
import reactImg from "../public/assets/images/techicon/react.png";
import nextImg from "../public/assets/images/techicon/next-js.svg";
import pythonImg from "../public/assets/images/techicon/python.webp";
import tsImg from "../public/assets/images/techicon/ts.png";
import unityImg from "../public/assets/images/techicon/unity.png";
import cppImg from "../public/assets/images/techicon/cpp.png";
import dockerImg from "../public/assets/images/techicon/docker.webp";
import figmaImg from "../public/assets/images/techicon/figma.webp";

export const skills: Skill[] = [
  { name: "React", iconSrc: reactImg },
  { name: "Next.js", iconSrc: nextImg },
  { name: "Python", iconSrc: pythonImg },
  { name: "TypeScript", iconSrc: tsImg },
  { name: "Unity", iconSrc: unityImg },
  { name: "C++", iconSrc: cppImg },
  { name: "Docker", iconSrc: dockerImg },
  { name: "Figma", iconSrc: figmaImg },
];
