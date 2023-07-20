import * as React from "react";
import { css } from "@emotion/react";

const Welcome = () => {
  const text = "welcome.";

  const welcomeStyle = css`
    font-size: 10em;
    font-weight: 200;
    font-family: "Dosis", "M PLUS 1", sans-serif;
    color: #252a34;
    background: linear-gradient(
      to right,
      #00000000 20%,
      #ffffff80 25%,
      #00000000 30%
    );
    background-size: 500% 100%;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;

    @media (max-width: 600px) {
      & {
        font-size: 8em;
      }
    }
    @media (max-width: 480px) {
      & {
        font-size: 6em;
      }
    }
    animation: gradient 20s linear infinite;

    @keyframes gradient {
      to {
        background-position-x: -500%;
      }
    }

    &::before {
      content: "${text}";
      position: absolute;
      z-index: -1;

      background: linear-gradient(#252a34 50%, #7b8495 100%);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      filter: drop-shadow(0px 0px 4px #fff);
    }
  `;

  return (
    <div
      css={css`
        ${welcomeStyle}
      `}
    >
      {text}
    </div>
  );
};

export default Welcome;
