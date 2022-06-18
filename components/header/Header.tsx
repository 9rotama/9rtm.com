import * as React from "react"
import Link from "next/link"
import { Global, css } from "@emotion/react"
import TitleButton from "./TitleButton"
import Menu from "./Menu"


type HeaderProps = {
  siteTitle: string;
}

const Header: React.FC<HeaderProps> = ({ siteTitle }) => {
  return (
    <header
      css={css`
        position: fixed;
        top: 0px;
        z-index: 100;
        width: 100%;
        background-color: #e3ecf470;
        backdrop-filter: blur(10px);

        animation-name: Down;
        animation-duration: 0.5s;
      `}
    >
      <div
        css={css`
          display: flex;
          justify-content: flex-end;
          align-items: center;
          padding: 10px 10vw 10px 10vw;

          @media (max-width: 960px) {
            & {
              padding: 7px 30px 7px 30px;
            }
          }
          @media (max-width: 480px) {
            & {
              padding: 7px 15px 7px 15px;
            }
          }
        `}
      >
        <TitleButton name={siteTitle} />
        <Menu />
      </div>
    </header>
  )
}

export default Header
