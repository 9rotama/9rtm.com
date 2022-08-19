import * as React from "react";
import { css } from "@emotion/react";
import { useRef } from "react";

type Props = {
  name: string;
  src: string;
};

const TechIcon: React.FC<Props> = ({ name, src }) => {
  const tipRef = useRef<HTMLDivElement>(null);

  return (
    <div
      css={css`
        ${divStyle}
      `}
    >
      <img
        src={src}
        alt={name}
        css={css`
          ${imgStyle}
        `}
      />
    </div>
  );
};

const divStyle = css`
  position: relative;

  transition-duration: 0.2s;

  &:hover {
    transform: scale(1.2);
    transition-duration: 0.2s;
  }
`;

const imgStyle = css`
  width: 40px;
`;

export default TechIcon;
