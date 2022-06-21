import * as React from "react";
import { css } from "@emotion/react";
import { useRef } from "react";

type DeviconProps = {
  name: string;
  id: string;
};

const Devicon: React.FC<DeviconProps> = ({ name, id }) => {
  const tipRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    tipRef.current!.style.opacity = "1";
    tipRef.current!.style.marginTop = "0px";
  }
  const handleMouseLeave = () => {
    tipRef.current!.style.opacity = "0";
    tipRef.current!.style.marginTop = "-10px";
  }

  return (
    <div
      css={css`
        position: relative;
        display: inline-block;
        margin-bottom: 20px;
        transition-duration: 0.2s;

        &:hover {
          transform: scale(1.2);
          transition-duration: 0.2s;
        }
      `}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/" +
          id +
          "/" +
          id +
          "-original.svg"
        }
        alt={name}
        css={css`
          width: 45px;
          margin: 5px;
        `}
      />
      <div
        css={css`
          /*onMouseEnter,onMouseLeaveで変更されるプロパティ(最初に表示しないよう初期化)*/
          opacity: 0;
          margin-top: -10px;

          position: absolute;
          left: 50%;
          transform: initial;
          transform: translateX(-50%);
          border-radius: 5px;
          padding: 5px;
          background: linear-gradient(#FFFFFFFF, #FFFFFF66);
          color: black;
          text-align: center;
          font-size: 0.7rem;
          font-weight: 600;
          font-family: "Roboto Mono", monospace;

          transition-duration: 0.2s;

        `}
        ref={tipRef}
      >
        {name}
      </div>
    </div>
  );
};

export default Devicon;
