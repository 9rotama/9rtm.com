import * as React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { css } from "@emotion/react";

type colorTheme = {
  backgroundColor: string;
  textColor?: string;
};

const normalTheme: colorTheme = {
  backgroundColor: "transparent",
  textColor: "#252a34",
};

const activeTheme: colorTheme = {
  backgroundColor: "#252a34",
  textColor: "#d0dde9",
};

type MenuButtonProps = {
  name: string;
  path: string;
};

const MenuButton: React.FC<MenuButtonProps> = ({ name, path }) => {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);

  useEffect( () => {
    if ( router.pathname == path ) {
      setIsActive(true);
    }else{
      setIsActive(false);
    }
  },[router.pathname, path, isActive]);

  return (
    <div
      css={css`
        text-decoration: none;
        border-bottom: solid;
        border-color: ${normalTheme.textColor}50;
        border-width: 1px;
        border-radius: 5px;
        background-color: ${isActive ? activeTheme.backgroundColor : normalTheme.backgroundColor};
        color: ${isActive ? activeTheme.textColor : normalTheme.textColor};
        font-size: 1.5em;
        font-weight: 500;
        margin-left: 10px;
        padding: 2px 10px 2px 10px;
        transition-duration: 0.3s;

        @media (max-width: 960px) {
          & {
            font-size: 1.2em;
          }
        }
      `}
    >
      <Link href={path} passHref>
        {name}
      </Link>
    </div>
  );
};

export default MenuButton;
