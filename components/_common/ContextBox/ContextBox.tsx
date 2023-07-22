import * as React from "react";
import { useContext } from "react";
import { css } from "@emotion/react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import ContextBoxIcon from "./ContextBoxIcon";
import Footer from "../../Footer/Footer";
import { themeContext } from "../../../const/contexts";

type Props = {
  pageIcon: IconDefinition;
  pageTitle: string;
  pageDescription: string;
  children: React.ReactNode;
};

const ContextBox = ({
  pageIcon,
  pageTitle,
  pageDescription,
  children,
}: Props) => {
  const theme = useContext(themeContext);

  const bgStyle = css`
    position: relative;
    left: 50%;
    transform: translate(-50%);

    max-width: 800px;
    padding: 50px 50px 70px 50px;
    margin: 150px 0 0 0;

    background: ${theme.contextbox.backgroundColor};
    border-radius: 30px;

    z-index: 3;

    @media (max-width: 720px) {
      & {
        margin-top: 100px;
        padding: 25px;
        padding-bottom: 50px;
      }
    }
    transition-duration: 0.3s;
  `;

  const titleStyle = css`
    display: inline-block;

    margin: 30px 0 0 0;

    color: ${theme.global.textColor};
    font-family: "Dosis", "M PLUS 1", sans-serif;
    font-weight: 500;
    font-size: 2.5em;
    text-transform: uppercase;

    @media (max-width: 720px) {
      font-size: 2.5em;
    }
    @media (max-width: 480px) {
      font-size: 2em;
    }

    animation: LetterNarrow 0.5s ease;

    transition-duration: 0.3s;
  `;

  const iconCenterStyle = css`
    display: flex;
    justify-content: center;
  `;

  return (
    <div
      css={css`
        ${wrapperStyle}
      `}
    >
      <div
        css={css`
          ${bgStyle}
        `}
      >
        <div>
          <div
            css={css`
              ${iconCenterStyle}
            `}
          >
            <ContextBoxIcon pageIcon={pageIcon} />
          </div>

          {/*ページタイトル*/}
          <div
            css={css`
              ${titleStyle}
            `}
          >
            {pageTitle}
          </div>
          <p>{pageDescription}</p>
        </div>

        {/*ページ内容*/}
        {children}
      </div>
      <Footer />
    </div>
  );
};

const wrapperStyle = css`
  padding-left: 20px;
  padding-right: 20px;

  text-align: center;

  animation-name: BlurUp;
  animation-duration: 0.3s;

  @media (max-width: 480px) {
    & {
      padding-left: 10px;
      padding-right: 10px;
    }
  }
`;

export default ContextBox;
