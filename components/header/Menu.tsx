import { css } from "@emotion/react";
import MenuButton from "./MenuButton";
import BgShowSwitch from "./BgShowSwitch";

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

  return (
    <div
      css={css`
        ${menuDisplayStyle}
      `}
    >
      {menuItems.map((e) => (
        <MenuButton key={e.name} name={e.name} path={e.path} />
      ))}
      <BgShowSwitch />
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
