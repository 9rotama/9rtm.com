import { Sns } from "@/types/sns";
import {
  IconDefinition,
  faGithub,
  faItchIo,
} from "@fortawesome/free-brands-svg-icons";

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
  {
    name: "ItchIo",
    icon: faItchIo,
    url: "https://9rotama.itch.io/",
  },
];
