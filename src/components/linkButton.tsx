import * as React from "react"
import { css } from "@emotion/react"

type LinkButtonProps = {
  color: string;
  hoverColor: string;
  url: string;
  children: React.ReactNode;
}

const LinkButton: React.FC<LinkButtonProps> = ({ color, hoverColor, url, children }) => {
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
  )
}

export default LinkButton
