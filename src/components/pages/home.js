import * as React from "react"
import PropTypes from "prop-types"
/** @jsx jsx */
import { css, jsx } from "@emotion/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faTwitter,
  faItchIo,
} from "@fortawesome/free-brands-svg-icons"
import Seo from "../seo"

function SnsLink({ icon, url, hoverColor }) {
  SnsLink.propTypes = {
    icon: PropTypes.element.isRequired,
    url: PropTypes.string.isRequired,
    hoverColor: PropTypes.string.isRequired,
  }
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
          color: #252A60a0;
          margin: 0.5rem;
          font-size: 2.3em;
          transition-duration: 0.3s;

          &:hover {
            color: ${hoverColor};
            filter: drop-shadow(0px 2px 3px ${hoverColor}a0);
            transform: scale(1.3);
            transition-duration: 0.3s;
          }
        `}
      />
    </a>
  )
}

function HomePage() {
  return (
    <>
      <Seo title="home" />
      <div
        css={css`
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translateY(-50%) translateX(-50%);
          text-align: center;
          z-index: 101;
          background: #E3ECF4EE;
          padding: 40px 40px 40px 40px;
          width: 350px;
          border-radius: 40px;

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
            filter: drop-shadow(0px 3px 5px #252A3455);

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
          ＊ here is 9rotama&apos;s portfolio ＊
        </p>
        <div
          css={css`
            position: relative;
            font-size: 1.1em;
            margin-top: 30px;

            animation-name: BlurfadeInDown;
            animation-duration: 0.5s;
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
      </div>
    </>
  )
}

export default HomePage
