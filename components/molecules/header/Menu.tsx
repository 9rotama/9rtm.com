import { css } from "@emotion/react";
import MenuButton from "../../atoms/header/MenuButton";
import BgShowSwitch from "../../atoms/header/BgShowSwitch";

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

const menuDisplayStyle = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export default Menu;
