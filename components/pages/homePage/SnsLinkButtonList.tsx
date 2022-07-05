import * as React from "react";
import { css } from "@emotion/react";
import {
  faGithub,
  faTwitter,
  faItchIo,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";
import SnsLinkButton from "./SnsLinkButton";

type snsLink = {
  name: string;
  icon: IconDefinition;
  url: string;
  hoverColor: string;
};

const snsLinks: Array<snsLink> = [
  {
    name: "github",
    icon: faGithub,
    url: "https://github.com/9rotama",
    hoverColor: "#9b5de5",
  },
  {
    name: "twitter",
    icon: faTwitter,
    url: "https://twitter.com/glctose_9",
    hoverColor: "#00bbf9",
  },
  {
    name: "itchio",
    icon: faItchIo,
    url: "https://9rotama.itch.io",
    hoverColor: "#F6434A",
  },
];

const SnsLinkButtonList = () => {
  return (
    <div
      css={css`
        position: relative;
        font-size: 1.1em;
        margin-top: 30px;
        margin-left: -40px;
        margin-right: -40px;
        background: #eff6faaa;
        padding: 15px 10px 20px 10px;
        border-radius: 0 0px 40px 40px;

        @media (max-width: 480px) {
          & {
            margin-left: 0px;
            margin-right: 0px;
          }
        }
      `}
    >
      {snsLinks.map((e) => (
        <SnsLinkButton
          key={e.name + "-snslinks"}
          icon={e.icon}
          url={e.url}
          hoverColor={e.hoverColor}
        />
      ))}
    </div>
  );
};

export default SnsLinkButtonList;
