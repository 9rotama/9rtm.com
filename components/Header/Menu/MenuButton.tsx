import * as React from "react";
import { useContext } from "react";
import Link from "next/link";
import { css } from "@emotion/react";
import { themeContext } from "../../../const/contexts";

type Props = {
  name: string;
  path: string;
  isActive?: boolean;
};

const MenuButton = ({ name, path, isActive }: Props) => {
  const theme = useContext(themeContext);

  const menuButtonStyle = css`
    width: fit-content;
    padding: 2px 10px 2px 10px;

    border-bottom: solid;
    border-color: ${isActive
      ? theme.header.menuButton.active.borderColor
      : theme.header.menuButton.passive.borderColor};
    border-width: 1px;
    border-radius: 5px;
    background-color: ${theme.header.menuButton.active.backgroundColor};

    color: ${theme.header.menuButton.active.innerColor};
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
          ? theme.header.menuButton.active.backgroundColor
          : theme.header.menuButton.passive.backgroundColor};
        color: ${isActive
          ? theme.header.menuButton.active.innerColor
          : theme.header.menuButton.passive.innerColor};

        &:hover {
          background-color: ${isActive
            ? theme.header.menuButton.active.backgroundColorHover
            : theme.header.menuButton.passive.backgroundColorHover};
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
