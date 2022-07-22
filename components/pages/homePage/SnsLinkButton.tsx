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
          font-size: 1.5em;
          transition-duration: 0.2s;
          animation-name: BlurfadeInDown;
          animation-duration: 0.4s;

          &:hover {
            color: ${hoverColor};
            transform: scale(1.3);
            transition-duration: 0.2s;
          }
        `}
      />
    </a>
  );
};

export default SnsLinkButton;
