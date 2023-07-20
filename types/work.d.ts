import { StaticImageData } from "next/image";

type Tech = {
  name: string;
  icon: string | StaticImageData;
};

export type Work = {
  title: string;
  url: string;
  date: Date;
  screenshot: string | StaticImageData;
  description: string;
  techStack: Array<Tech>;
  isTeam: boolean;
};
