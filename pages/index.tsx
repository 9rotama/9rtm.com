import * as React from "react"
import { css } from "@emotion/react"
import Layout from "../components/Layout"
import SnsLinkButtonlist from "../components/pages/homePage/SnsLinkButtonList"

const HomePage = () => {
  return (
    <Layout>
      <div
        css={css`
          display: flex;
          height: 100vh;
          justify-content: center;
          align-items: center;
        `}
      >
        <div
          css={css`
            text-align: center;
            z-index: 101;
            background: #e3ecf4ee;
            padding: 40px 40px 40px 40px;
            width: 350px;
            border-radius: 40px;
            box-shadow: 0 10px #baccd4ee;

            animation-name: BlurfadeInDown;
            animation-duration: 0.5s;

            @media (max-width: 480px) {
              & {
                padding: 40px 0 40px 0;
                width: 100%;
                border-radius: 0px;
              }
            }
          `}
        >
          <img
            src="https://avatars.githubusercontent.com/u/65887771?v=4"
            alt="prof"
            css={css`
              position: relative;
              width: 180px;
              height: 180px;
              border-radius: 10%;
              filter: drop-shadow(0px 3px 5px #252a3455);

              animation-name: BlurfadeInDown;
              animation-duration: 0.3s;
            `}
          />
          <p
            css={css`
              position: relative;
              font-size: 1.3em;
              font-weight: 500;
              margin-top: 30px;

              animation-name: BlurfadeInDown;
              animation-duration: 0.4s;

              @media (max-width: 480px) {
                & {
                  font-size: 1.1em;
                }
              }
            `}
          >
            ＊ Welcome to my portfolio ＊
          </p>
          <SnsLinkButtonlist />
        </div>
      </div>
    </Layout>
  )
}

export default HomePage
