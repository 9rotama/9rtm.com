import * as React from "react";
import { css } from "@emotion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type ContextBoxProps = {
  pageIcon: IconDefinition;
  pageTitle: string;
  children: React.ReactNode;
};

const ContextBox: React.FC<ContextBoxProps> = ({
  pageIcon,
  pageTitle,
  children,
}) => {
  return (
    <div
      css={css`
        padding-left: 20px;
        padding-right: 20px;

        animation-name: BlurUp;
        animation-duration: 0.3s;

        @media (max-width: 480px) {
          & {
            padding-left: 10px;
            padding-right: 10px;
          }
        }
      `}
    >
      <div
        css={css`
          position: relative;
          max-width: 800px;
          padding: 50px;
          padding-bottom: 70px;
          margin-top: 150px;
          left: 50%;
          transform: translate(-50%);
          background: #e3ecf4ee;
          border-radius: 30px;
          z-index: 3;
          @media (max-width: 720px) {
            & {
              margin-top: 100px;
              padding: 25px;
              padding-bottom: 50px;
            }
          }
        `}
      >
        <div>
          {/*トップに来る円*/}
          <div
            css={css`
              position: relative;
              background-color: #252a34;
              border-radius: 50%;
              width: 100px;
              height: 100px;
              margin-bottom: -50px;
              display: flex;
              z-index: 5;
            `}
          >
            {/*ページごとのアイコン*/}
            <FontAwesomeIcon
              icon={pageIcon}
              css={css`
                color: #d0dde9;
                margin: auto;
                font-size: 3em;
              `}
            />
          </div>
          {/*ページタイトル*/}
          <div
            css={css`
              color: #252a34;
              margin-top: 70px;
              margin-bottom: 70px;
              font-weight: 500;
              font-size: 3em;
              @media (max-width: 720px) {
                font-size: 2.5em;
              }
              @media (max-width: 480px) {
                font-size: 2em;
              }
            `}
          >
            {pageTitle}
          </div>
        </div>
        {/*ページ内容*/}
        {children}
      </div>
      <footer
        css={css`
          text-align: center;
          margin: 40px;
          font-size: 100;
          color: #252a3499;
          z-index: 200;
        `}
      >
        © {new Date().getFullYear()} 9rotama
      </footer>
    </div>
  );
};

export default ContextBox;
