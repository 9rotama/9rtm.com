import * as React from "react";
import { css } from "@emotion/react";
import DeviconSmall from "../../atoms/works/DeviconSmall";

type CardProps = {
  list: Array<string>;
};

const TechStack: React.FC<CardProps> = ({ list }) => {
  return (
    <div
      css={css`
        ${techStackListStyle}
      `}
    >
      {list.map((e) => (
        <DeviconSmall src={e} key={e} />
      ))}
    </div>
  );
};

const techStackListStyle = css`
  position: absolute;
  float: left;
  bottom: 15px;
`;

export default TechStack;
