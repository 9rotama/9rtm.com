import * as React from "react";
import { useEffect } from "react";
import Link from "next/link";
import { css } from "@emotion/react";

type colorTheme = {
  backgroundColor: string;
  backgroundColorHover: string;
  textColor?: string;
};

const normalTheme: colorTheme = {
  backgroundColor: "transparent",
  backgroundColorHover: "#252a3420",
  textColor: "#252a34",
};

const activeTheme: colorTheme = {
  backgroundColor: "#252a34",
  backgroundColorHover: "#252a34",
  textColor: "#d0dde9",
};

type Props = {
  name: string;
  path: string;
  isActive?: boolean;
};

const MenuButton = ({ name, path, isActive }: Props) => {
  const menuButtonStyle = css`
    width: fit-content;
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

  return (
    <div
      css={css`
        ${menuButtonStyle}
        background-color: ${isActive
          ? activeTheme.backgroundColor
          : normalTheme.backgroundColor};
        color: ${isActive ? activeTheme.textColor : normalTheme.textColor};

        &:hover {
          background-color: ${isActive
            ? activeTheme.backgroundColorHover
            : normalTheme.backgroundColorHover};
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
