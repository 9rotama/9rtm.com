import * as React from "react";
import { css } from "@emotion/react";
import SnsLinkButtonlist from "../components/forPages/homePage/SnsLinkButtonList";

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
          animation-name: BlurfadeInDown;
          animation-duration: 0.4s;
        `}
      >
        <div
          css={css`
            font-size: 10em;
            font-weight: 200;
            text-shadow: 0 0 10px #ffffffc2, 0 0 10px #ffffffc2;
            font-family: "Dosis", "M PLUS 1", sans-serif;
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
        `}
        >
          welcome.
        </div>
        <div
          css={css`
            border-bottom: 1px solid #252a3477;
            width: 50px;
            margin: -5px 0px 10px 0px;
          `}
        />
        <SnsLinkButtonlist />
      </div>
    </>
  );
};

export default HomePage;
