import * as React from "react";
import { css } from "@emotion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type SnsLinkButtonProps = {
  icon: IconDefinition;
  url: string;
  hoverColor: string;
};

const SnsLinkButton: React.FC<SnsLinkButtonProps> = ({
  icon,
  url,
  hoverColor,
}) => {
  return (
    <a
      href={url}
      css={css`
        &:hover {
          background-color: transparent;
        }
      `}
    >
      <FontAwesomeIcon
        icon={icon}
        css={css`
          color: #253a60a0;
          margin: 0 0.8rem 0 0.8rem;
          font-size: 1.8em;
          transition-duration: 0.3s;

          &:hover {
            color: ${hoverColor};
            filter: drop-shadow(0px 4px 2px #252a3432);
            transform: scale(1.3);
            transition-duration: 0.3s;
          }
        `}
      />
    </a>
  );
};

export default SnsLinkButton;
