import * as React from "react"
import Link from "next/link"
import { css } from "@emotion/react"

type MenuButtonProps = {
  name: string;
  path: string;
}

const MenuButton: React.FC<MenuButtonProps> = ({ name, path }) => {
  return (
    <div css={css`
      text-decoration: none;
      border-bottom: solid;
      border-color: #252a3450;
      border-width: 1px;
      border-radius: 5px;
      color: #252a34;
      font-size: 1.5em;
      font-weight: 500;
      margin-left: 10px;
      padding: 2px 10px 2px 10px;
      transition-duration: 0.3s;

      &:hover {
        background: #252a3410;
        transition-duration: 0.3s;
      }
      &:active {
        background: #252a34;
        color: #d0dde9;
        transition-duration: 0.3s;
      }

      @media (max-width: 960px) {
        & {
          font-size: 1.2em;
        }
      }
    `}>
      <Link
        href={path}
        passHref
      >
        {name}
      </Link>
    </div>
  );
}


export default MenuButton
