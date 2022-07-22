import * as React from "react";
import { css } from "@emotion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type Props = {
  pageIcon: IconDefinition;
  pageTitle: string;
  pageDescription: string;
  children: React.ReactNode;
};

const ContextBox: React.FC<Props> = ({
  pageIcon,
  pageTitle,
  pageDescription,
  children,
}) => {
  return (
    <div
      css={css`${wrapperStyle}`}
    >
      <div
        css={css`${bgStyle}`}
      >

        <div>
          {/*ページごとのアイコンの背景になる円*/}
          <div
            css={css`${iconBgStyle}`}
          >
            {/*ページごとのアイコン*/}
            <FontAwesomeIcon
              icon={pageIcon}
              css={css`${iconStyle}`}
            />
          </div>
          {/*ページタイトル*/}
          <div
            css={css`${titleStyle}`}
          >
            {pageTitle}
          </div>
          <p>
            {pageDescription}
          </p>
        </div>

        {/*ページ内容*/}
        {children}
      </div>

      <footer
        css={css`${footerStyle}`}
      >
        © {new Date().getFullYear()} 9rotama
      </footer>
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
`

const bgStyle = css`
  position: relative;
  left: 50%;
  transform: translate(-50%);

  max-width: 800px;
  padding: 50px 50px 70px 50px;
  margin: 150px 0 0 0;

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
`;

const iconBgStyle = css`
  position: relative;
  display: flex;
  z-index: 5;

  margin: 0 auto -50px auto;

  width: 100px;
  height: 100px;
  background-color: #252a34;
  border-radius: 50%;
`;

const iconStyle = css`
  margin: auto;

  color: #d0dde9;
  font-size: 2.5em;
`;

const titleStyle = css`
  display: inline-block;

  margin: 70px 0 0 0;

  color: #252a34;
  font-family: "Dosis", "M PLUS 1", sans-serif;
  font-weight: 500;
  font-size: 2.8em;
  text-transform: uppercase;

  @media (max-width: 720px) {
    font-size: 2.5em;
  }
  @media (max-width: 480px) {
    font-size: 2em;
  }
`;

const footerStyle = css`
  text-align: center;
  margin: 40px;
  font-size: 100;
  color: #252a3499;
  z-index: 200;
`;

export default ContextBox;
