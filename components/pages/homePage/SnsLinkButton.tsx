import * as React from "react";
import { css } from "@emotion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type Props = {
  icon: IconDefinition;
  url: string;
  hoverColor: string;
};

const SnsLinkButton: React.FC<Props> = ({
  icon,
  url,
  hoverColor,
}) => {
  return (
    <a
      href={url}
      css={css`
        display: flex;
        background: #eff6fadd;
        color: #253a60a0;
        width: 50px;
        height: 50px;
        padding: 2px;
        margin: 3px;
        border-radius: 50%;
        transition-duration: 0.2s;

        &:hover {
          background: ${hoverColor};
          color: #ffffffdd;
          transition-duration: 0.2s;
        }
      `}
    >
      <FontAwesomeIcon
        icon={icon}
        css={css`
          margin: auto;
          font-size: 1.5em;

          &:hover {
          }
        `}
      />
    </a>
  );
};

export default SnsLinkButton;
