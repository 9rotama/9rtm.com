import * as React from "react";
import { css } from "@emotion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type Props = {
  icon: IconDefinition;
  url: string;
  hoverColor: string;
};

const SnsLinkButton: React.FC<Props> = ({ icon, url, hoverColor }) => {
  const linkStyle = css`
    display: flex;

    background: #eff6fadd;
    width: 50px;
    height: 50px;
    padding: 2px;
    margin: 3px;
    border-radius: 50%;

    transition-duration: 0.2s;

    color: #253a60a0;

    &:hover {
      background: #253a60a0;
      color: #ffffffdd;
      transition-duration: 0.2s;
    }
  `;

  const iconStyle = css`
    margin: auto;
    font-size: 1.5em;
  `;

  return (
    <a
      href={url}
      css={css`
        ${linkStyle}
        &:hover {
          background: ${hoverColor};
        }
      `}
    >
      <FontAwesomeIcon
        icon={icon}
        css={css`
          ${iconStyle}
        `}
      />
    </a>
  );
};

export default SnsLinkButton;
