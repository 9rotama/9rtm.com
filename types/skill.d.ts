import { StaticImageData } from "next/image";

export type Skill = {
  name: string;
  iconSrc: StaticImageData;
  url?: string;
};
