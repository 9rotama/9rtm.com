import * as React from "react";
import Link from "next/link";
import { Global, css } from "@emotion/react";
import MenuButton from "../../atoms/header/MenuButton";

type menuItem = {
  name: string;
  path: string;
};

const Menu = () => {
  return (
    <div
      css={css`
        ${menuDisplayStyle}
      `}
    >
      {menuItems.map((e) => (
        <MenuButton key={e.name} name={e.name} path={e.path} />
      ))}
    </div>
  );
};

const menuItems: Array<menuItem> = [
  {
    name: "about",
    path: "/about",
  },
  {
    name: "works",
    path: "/works",
  },
];

const menuDisplayStyle = css`
  display: flex;
  justify-content: flex-end;
`;

export default Menu;
