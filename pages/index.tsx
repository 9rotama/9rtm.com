import * as React from "react";
import { css } from "@emotion/react";
import SnsLinkButtonlist from "../components/_pages/home/SnsLinkButtonList";
import Welcome from "../components/_pages/home/Welcome";
import MyHead from "../components/_common/MyHead";

const HomePage = () => {
  const pageTitle = "home";
  const pageDescription = "ホーム";

  const wrapStyle = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 100vh;

    text-align: center;

    animation-name: BlurfadeInDown;
    animation-duration: 0.4s;
  `;

  const borderStyle = css`
    border-bottom: 1px solid #252a3477;
    width: 50px;
    margin: -5px 0px 10px 0px;
  `;

  return (
    <>
      <MyHead title={pageTitle} description={pageDescription} />

      <div
        css={css`
          ${wrapStyle}
        `}
      >
        <Welcome />
        <div
          css={css`
            ${borderStyle}
          `}
        />
        <SnsLinkButtonlist />
      </div>
    </>
  );
};

export default HomePage;
