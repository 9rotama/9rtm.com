import * as React from "react";
import { css } from "@emotion/react";
import SnsLinkButtonlist from "../components/pages/homePage/SnsLinkButtonList";

const HomePage = () => {
  return (
    <>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          height: 100vh;
          text-align: center;
          justify-content: center;
          align-items: center;
        `}
      >
        <div
          css={css`
            font-size: 10em;
            font-weight: 200;
            text-shadow: 0 0 10px #ffffffc2, 0 0 10px #ffffffc2;
            font-family: "Dosis", "M PLUS 1", sans-serif;
            z-index: 200;
            animation-name: BlurfadeInDown;
            animation-duration: 0.4s;
        `}
        >
          welcome.
        </div>
        <SnsLinkButtonlist />
      </div>
    </>
  );
};

export default HomePage;
