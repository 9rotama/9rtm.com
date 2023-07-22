import * as React from "react";
import { css } from "@emotion/react";
import { useContext } from "react";
import { themeContext } from "../../../const/contexts";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type Props = {
  pageIcon: IconDefinition;
};

const ContextBoxIcon = ({ pageIcon }: Props) => {
  const theme = useContext(themeContext);

  const iconBgStyle = css`
    position: relative;
    display: flex;
    z-index: 5;

    width: 100px;
    height: 100px;
    background-color: ${theme.contextbox.iconBgColor};
    border-radius: 50%;
  `;

  const iconStyle = css`
    margin: auto;

    color: ${theme.contextbox.iconColor};
    font-size: 2.5em;

    animation: Hangout 1s ease-in-out;

    @keyframes Hangout {
      0% {
        transform: rotate(90deg);
      }
      25% {
        transform: rotate(-60deg);
      }
      50% {
        transform: rotate(30deg);
      }
      75% {
        transform: rotate(-15deg);
      }
      100% {
        transform: rotate(0deg);
      }
    }
  `;

  return (
    <div
      css={css`
        ${iconBgStyle}
      `}
    >
      {/*ページごとのアイコン*/}
      <FontAwesomeIcon
        icon={pageIcon}
        css={css`
          ${iconStyle}
        `}
      />
    </div>
  );
};

export default ContextBoxIcon;
