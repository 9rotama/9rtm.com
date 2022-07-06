import * as React from "react";
import Link from "next/link";
import { Global, css } from "@emotion/react";
import MenuButton from "./MenuButton";

type menuItem = {
  name: string;
  path: string;
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

const Menu = () => {
  return (
    <div
      css={css`
        display: flex;
        justify-content: flex-end;
      `}
    >
      {menuItems.map((e) => (
        <MenuButton key={e.name} name={e.name} path={e.path} />
      ))}
    </div>
  );
};

export default Menu;
