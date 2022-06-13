import PropTypes from "prop-types"
/** @jsx jsx */
import { css, jsx } from "@emotion/react"

function LinkButton({ color, hoverColor, url, children }) {
  return (
    <a
      css={css`
        padding: 10px;
        border-radius: 50vh;
        background: ${color};
        color: white;
        text-decoration: none;
        transition-duration: 0.2s;

        &:hover {
          background: ${hoverColor};

          transition-duration: 0.2s;
        }
      `}
      href={url}
    >
      {children}
    </a>
  );
}

export default LinkButton;