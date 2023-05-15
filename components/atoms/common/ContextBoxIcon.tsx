import * as React from "react";
import { css } from "@emotion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type Props = {
  pageIcon: IconDefinition;
};

const ContextBoxIcon: React.FC<Props> = ({ pageIcon }) => {
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

const iconBgStyle = css`
  position: relative;
  display: flex;
  z-index: 5;

  margin: 0 auto -50px auto;

  width: 100px;
  height: 100px;
  background-color: #252a34;
  border-radius: 50%;
`;

const iconStyle = css`
  margin: auto;

  color: #d0dde9;
  font-size: 2.5em;
`;

export default ContextBoxIcon;
