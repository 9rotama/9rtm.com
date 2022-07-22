import * as React from "react";
import { css } from "@emotion/react";

const Footer: React.FC = () => {
  return (
    <footer
      css={css`
        ${footerStyle}
      `}
    >
      © {new Date().getFullYear()} 9rotama
    </footer>
  );
};

const footerStyle = css`
  text-align: center;
  margin: 40px;
  font-size: 100;
  color: #252a3499;
  z-index: 200;
`;

export default Footer;
