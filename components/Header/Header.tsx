import { css } from "@emotion/react";
import TitleButton from "./TitleButton";
import Menu from "./Menu/Menu";
import { useContext } from "react";
import { themeContext } from "../../const/contexts";

type Props = {
  siteTitle: string;
};

const Header: React.FC<Props> = ({ siteTitle }) => {
  const theme = useContext(themeContext);

  const headerStyle = css`
    position: fixed;
    top: 0px;

    width: 100%;
    background-color: ${theme.header.backgroundColor};
    backdrop-filter: blur(10px);

    animation-name: Down;
    animation-duration: 0.5s;

    z-index: 100;

    transition-duration: 0.3s;
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

export default Header;
