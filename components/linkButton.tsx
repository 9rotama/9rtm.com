import * as React from "react"
import { css } from "@emotion/react"
import { IconDefinition,faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

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
      <FontAwesomeIcon
        icon={faArrowUpRightFromSquare}
        css={css`
          color: #FFFFFF;
          margin: 0 0.8rem 0 0.8rem;
          font-size: 1.3em;
          transition-duration: 0.3s;
        `}
      />
      {children}
    </a>
  )
}

export default LinkButton
