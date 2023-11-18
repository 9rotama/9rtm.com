import { Sns } from "@/types/sns";
import { IconDefinition, faGithub } from "@fortawesome/free-brands-svg-icons";

type snsLink = {
  name: Sns;
  icon: IconDefinition;
  url: string;
};

export const snsLinks: Array<snsLink> = [
  {
    name: "GitHub",
    icon: faGithub,
    url: "https://github.com/9rotama",
  },
];
