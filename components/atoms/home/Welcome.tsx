import * as React from "react";
import { css } from "@emotion/react";

const Welcome = () => {
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

const welcomeStyle = css`
  font-size: 10em;
  font-weight: 200;
  font-family: "Dosis", "M PLUS 1", sans-serif;
  text-shadow: 0 0 10px #ffffffc2, 0 0 10px #ffffffc2;

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

export default Welcome