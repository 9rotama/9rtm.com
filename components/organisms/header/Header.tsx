import * as React from "react";
import Link from "next/link";
import { Global, css } from "@emotion/react";
import TitleButton from "../../atoms/works/TitleButton";
import Menu from "../../molecules/header/Menu";

type Props = {
  siteTitle: string;
};

const Header: React.FC<Props> = ({ siteTitle }) => {
  return (
    <header
      css={css`
        ${headerStyle}
      `}
    >
      <div
        css={css`
          ${itemDisplayStyle}
        `}
      >
        <TitleButton name={siteTitle} />
        <Menu />
      </div>
    </header>
  );
};

const headerStyle = css`
  position: fixed;
  top: 0px;

  width: 100%;
  background-color: #e3ecf470;
  backdrop-filter: blur(10px);

  animation-name: Down;
  animation-duration: 0.5s;

  z-index: 100;
`;

const itemDisplayStyle = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  padding: 10px 10vw 10px 10vw;

  @media (max-width: 960px) {
    & {
      padding: 7px 30px 7px 30px;
    }
  }
  @media (max-width: 480px) {
    & {
      padding: 7px 15px 7px 15px;
    }
  }
`;

export default Header;
