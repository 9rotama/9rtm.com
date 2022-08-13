import * as React from "react";
import { css } from "@emotion/react";
import { useRef } from "react";

type Props = {
  name: string;
  id: string;
  src: string;
};

const TechIcon: React.FC<Props> = ({ id, name, src }) => {
  const tipRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    tipRef.current!.style.opacity = "1";
    tipRef.current!.style.marginTop = "0px";
  };
  const handleMouseLeave = () => {
    tipRef.current!.style.opacity = "0";
    tipRef.current!.style.marginTop = "-10px";
  };

  return (
    <div
      css={css`
        ${divStyle}
      `}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={src}
        alt={name}
        css={css`
          ${imgStyle}
        `}
      />
      <div
        css={css`
          ${tipStyle}
        `}
        ref={tipRef}
      >
        {name}
      </div>
    </div>
  );
};

const divStyle = css`
  position: relative;
  margin-bottom: 20px;

  display: inline-block;

  transition-duration: 0.2s;

  &:hover {
    transform: scale(1.2);
    transition-duration: 0.2s;
  }
`;

const imgStyle = css`
  width: 45px;
  margin: 5px;
`;

const tipStyle = css`
  /*onMouseEnter,onMouseLeaveで変更されるプロパティ(最初に表示しないよう初期化)*/
  opacity: 0;
  margin-top: -10px;

  position: absolute;
  left: 50%;
  transform: initial;
  transform: translateX(-50%);

  border-radius: 5px;
  background: linear-gradient(#ffffffff, #ffffff66);

  color: black;
  text-align: center;
  padding: 5px;
  font-size: 0.7rem;
  font-weight: 600;
  font-family: "Roboto Mono", monospace;

  transition-duration: 0.2s;
`;

export default TechIcon;
