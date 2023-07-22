import { css } from "@emotion/react";
import { useRouter } from "next/router";
import MenuButton from "./MenuButton";
import BgShowSwitch from "./BgShowSwitch";
import { ThemeSwitch } from "./ThemeSwitch";

type menuItem = {
  name: string;
  path: string;
};

const Menu = () => {
  const menuDisplayStyle = css`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 5px;
  `;

  const router = useRouter();

  return (
    <div
      css={css`
        ${menuDisplayStyle}
      `}
    >
      {menuItems.map((e) =>
        router.pathname == e.path ? (
          <MenuButton key={e.name} name={e.name} path={e.path} isActive />
        ) : (
          <MenuButton key={e.name} name={e.name} path={e.path} />
        )
      )}
      <BgShowSwitch />
      <ThemeSwitch />
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

export default Menu;
