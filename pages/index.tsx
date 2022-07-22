import * as React from "react";
import { css } from "@emotion/react";
import SnsLinkButtonlist from "../components/pages/homePage/SnsLinkButtonList";

const HomePage = () => {
  return (
    <>
      <div
        css={css`
          display: flex;
          height: 100vh;
          justify-content: center;
          align-items: center;
        `}
      >
        {/*立体的なボックス部分*/}
        <div
          css={css`
            text-align: center;
            z-index: 101;
            background: #e3ecf4ee;
            padding: 40px 40px 0px 40px;
            width: 350px;
            border-radius: 40px;
            box-shadow: 0 3px #99a8af87;

            animation-name: BlurfadeInDown;
            animation-duration: 0.3s;

            @media (max-width: 480px) {
              & {
                padding: 40px 0 40px 0;
              }
            }
          `}
        >
          <div
            css={css`
              position: relative;
              font-size: 1.2em;

              animation-name: BlurfadeInDown;
              animation-duration: 0.5s;

              @media (max-width: 480px) {
                & {
                  font-size: 1em;
                }
              }
            `}
          >
          welcome to my portfolio!
          </div>
          <SnsLinkButtonlist />
        </div>
      </div>
    </>
  );
};

export default HomePage;
