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

type Props = {
  name: string;
  path: string;
};

const MenuButton: React.FC<Props> = ({ name, path }) => {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);

  const menuButtonStyle = css`
    padding: 2px 10px 2px 10px;

    border-bottom: solid;
    border-color: ${normalTheme.textColor}50;
    border-width: 1px;
    border-radius: 5px;
    background-color: ${normalTheme.backgroundColor};

    color: ${normalTheme.textColor};
    text-transform: uppercase;
    text-decoration: none;
    font-family: "Dosis", "M PLUS 1", sans-serif;
    font-size: 1.5em;
    font-weight: 500;

    transition-duration: 0.3s;

    @media (max-width: 960px) {
      & {
        font-size: 1.2em;
      }
    }
  `;

  useEffect(() => {
    if (router.pathname == path) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [router.pathname, path, isActive]);

  return (
    <div
      css={css`
        ${menuButtonStyle}
        background-color: ${isActive
          ? activeTheme.backgroundColor
          : normalTheme.backgroundColor};
        color: ${isActive ? activeTheme.textColor : normalTheme.textColor};
      `}
    >
      <Link href={path} passHref>
        {name}
      </Link>
    </div>
  );
};

export default MenuButton;
