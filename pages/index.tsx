import * as React from "react"
import { css } from "@emotion/react"
import Layout from "../components/Layout"
import SnsLinkButtonlist from "../components/pages/homePage/SnsLinkButtonList"

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
            padding: 40px 40px 40px 40px;
            width: 350px;
            border-radius: 40px;
            box-shadow: 0 10px #baccd4ee;

            animation-name: BlurfadeInDown;
            animation-duration: 0.5s;

            @media (max-width: 480px) {
              & {
                padding: 40px 0 40px 0;
              }
            }
          `}
        >
        {/*TODO: ここにGIFアニメを入れる*/}
          <div
            css={css`
              position: relative;
              font-size: 1.3em;
              font-weight: 500;

              animation-name: BlurfadeInDown;
              animation-duration: 0.4s;

              @media (max-width: 480px) {
                & {
                  font-size: 1.1em;
                }
              }
            `}
          >
            ＼welcome to my portfolio !! ／ <br />（っ ‘ ᵕ ‘ ｃ）（っ ‘ ᵕ ‘ ｃ)
          </div>
          <SnsLinkButtonlist />
        </div>
      </div>
    </>
  )
}

export default HomePage
