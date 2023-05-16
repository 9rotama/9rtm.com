import * as React from "react";
import { css } from "@emotion/react";
import SnsLinkButtonlist from "../components/molecules/home/SnsLinkButtonList";
import Welcome from "../components/atoms/home/Welcome";
import MyHead from "../components/MyHead";

const HomePage = () => {
  const pageTitle = "home";
  const pageDescription = "ホーム";
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

export default HomePage;
