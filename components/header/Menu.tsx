import * as React from "react"
import Link from "next/link"
import { Global, css } from "@emotion/react"
import MenuButton from "./MenuButton"

const Menu = () => {
  return (
    <div css={css`
      display: flex;
      justify-content: flex-end;
    `}>
      <MenuButton name={"about"} path="/about" />
      <MenuButton name={"works"} path="/works" />
    </div>
  )
}

export default Menu
