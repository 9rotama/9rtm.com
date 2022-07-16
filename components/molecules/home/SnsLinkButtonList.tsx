import * as React from "react";
import { css } from "@emotion/react";
import {
  faGithub,
  faTwitter,
  faItchIo,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";
import SnsLinkButton from "../../atoms/home/SnsLinkButton";

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
        ${listStyle}
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

const listStyle = css`
  position: relative;

  display: flex;
  flex-direction: row;

  padding: 10px 10px 10px 10px;

  @media (max-width: 480px) {
    & {
      margin-left: 0px;
      margin-right: 0px;
    }
  }
`;

export default SnsLinkButtonList;
