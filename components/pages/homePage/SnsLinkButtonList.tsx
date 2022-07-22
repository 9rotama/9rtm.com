import * as React from "react"
import { css } from "@emotion/react"
import {
  faGithub,
  faTwitter,
  faItchIo,
} from "@fortawesome/free-brands-svg-icons"
import SnsLinkButton from "./SnsLinkButton"

const SnsLinkButtonList = () => {
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
      <SnsLinkButton
        icon={faGithub}
        url="https://github.com/9rotama"
        hoverColor="#9b5de5"
      />
      <SnsLinkButton
        icon={faTwitter}
        url="https://twitter.com/glctose_9"
        hoverColor="#00bbf9"
      />
      <SnsLinkButton
        icon={faItchIo}
        url="https://9rotama.itch.io"
        hoverColor="#F6434A"
      />
    </div>
  )
}

export default SnsLinkButtonList
