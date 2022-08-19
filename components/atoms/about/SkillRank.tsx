import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useRef, useEffect } from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { css } from "@emotion/react";

type Props = {
  rank: number;
};

export const SkillRank: React.FC<Props> = ({ rank }) => {
  const [rankState, setRankState] = useState<number>(0);
  const stars: boolean[] = [];
  for (let i = 0; i < 5; i++) {
    if( i < rank ) {
      stars.push(true);
    } else {
      stars.push(false);
    }
  }
  
  return (
    <div 
      css={css`
        ${wrapStyle}
      `}
    >
      <div>
        {stars.map((e, _) => (    
          e ? 
          <FontAwesomeIcon
            key={_}
            icon={faStar}
            css={css`
              ${StarTrueStyle}
            `}
          /> : 
          <FontAwesomeIcon
            key={_}
            icon={faStar}
            css={css`
              ${StarFalseStyle}
            `}
          />
        ))}
      </div>
    </div>
  );
}

const wrapStyle = css`
  margin: 0 0 0 10px;
`
const StarTrueStyle = css`
  color: #73a2d8;
`

const StarFalseStyle = css`
  color: #00111d16;
`