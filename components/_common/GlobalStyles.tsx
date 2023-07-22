import { useContext } from "react";
import { Global, css } from "@emotion/react";
import { themeContext } from "../../const/contexts";

export const GlobalStyles = () => {
  const theme = useContext(themeContext);

  const global = css`
    body {
      font-family: "Inter", "M PLUS 1", sans-serif;
      font-weight: 400;
      color: ${theme.global.textColor};
      background-color: ${theme.global.backgroundColor};
      margin: 0;
    }

    a {
      text-decoration: none;
      color: inherit;
    }

    h1 {
      font-family: "Dosis", "M PLUS 1", sans-serif;
      text-transform: uppercase;
      font-weight: 400;
      font-size: 1.7em;
      text-decoration: none;
      margin: 80px -10px 30px -10px;
      padding: 10px 20px 10px 20px;
      border-bottom: 1px solid ${theme.contextbox.headingBorderColor};
    }

    h2 {
      font-weight: 400;
      font-size: 1.5em;
    }

    h3 {
      font-weight: 400;
      font-size: 1.2em;
    }

    h4 {
      font-weight: 500;
    }
  `;

  return <Global styles={global} />;
};
