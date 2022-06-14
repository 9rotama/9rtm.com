import * as React from "react"
import { css } from "@emotion/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faGithub,
  faTwitter,
  faItchIo,
} from "@fortawesome/free-brands-svg-icons"
import Seo from "../seo"

type SnsLinkProps = {
  icon: IconDefinition,
  url: string,
  hoverColor: string
}

const SnsLink: React.FC<SnsLinkProps> = ({ icon, url, hoverColor }) => {
  return (
    <a
      href={url}
      css={css`
        &:hover {
          background-color: transparent;
        }
      `}
    >
      <FontAwesomeIcon
        icon={icon}
        css={css`
          color: #253a60a0;
          margin: 0 0.8rem 0 0.8rem;
          font-size: 1.8em;
          transition-duration: 0.3s;

          &:hover {
            color: ${hoverColor};
            transform: scale(1.3);
            transition-duration: 0.3s;
          }
        `}
      />
    </a>
  )
}

const SnsLinkWrapper = () => {
  return (
    <div
      css={css`
        position: relative;
        font-size: 1.1em;
        margin-top: 30px;
        background: #eff6faf8;
        padding: 15px;
        border-radius: 50vh;

        animation-name: BlurfadeInDown;
        animation-duration: 0.5s;

        @media (max-width: 480px) {
          & {
            border-radius: 0px;
          }
        }
      `}
    >
      <SnsLink
        icon={faGithub}
        url="https://github.com/9rotama"
        hoverColor="#9b5de5"
      />
      <SnsLink
        icon={faTwitter}
        url="https://twitter.com/glctose_9"
        hoverColor="#00bbf9"
      />
      <SnsLink
        icon={faItchIo}
        url="https://9rotama.itch.io"
        hoverColor="#F6434A"
      />
    </div>
  )
}

const HomePage = () => {
  return (
    <>
      <Seo title="home" />
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
          <SnsLinkWrapper />
        </div>
      </div>
    </>
  )
}

export default HomePage
