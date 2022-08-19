import * as React from "react";
import { css } from "@emotion/react";

type Props = {
  rank: number;
};

export const SkillRank: React.FC<Props> = ({ rank }) => {
  return (
    <div 
      css={css`
        ${wrapStyle}
      `}
    >
      <div >
        ★★★★★
      </div>
    </div>
  );
}

const wrapStyle = css`
  margin: 0 0 0 10px;
`