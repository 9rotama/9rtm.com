import * as React from "react";
import { css } from "@emotion/react";

const Welcome = () => {
  const welcomeStyle = css`
    font-size: 10em;
    font-weight: 200;
    font-family: "Dosis", "M PLUS 1", sans-serif;
    text-shadow: 0 0 20px #ffffffff, 0 0 20px #ffffffff;

    z-index: 200;
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
  `;

  return (
    <div
      css={css`
        ${welcomeStyle}
      `}
    >
      welcome.
    </div>
  );
};

export default Welcome;