import * as React from "react";
import { css } from "@emotion/react";
import {
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type LinkButtonProps = {
  url: string;
  children: React.ReactNode;
};

const LinkButton: React.FC<LinkButtonProps> = ({
  url,
  children,
}) => {
  return (
    <div
      css={css`
        width: 100%;
        height: auto;
      `}
    >
      <a
        css={css`
          padding: 20px 20px 20px 10px;
          border-radius: 50vh;
          background: #252a34;
          color: #d0dde9;
          text-decoration: none;
          transition-duration: 0.2s;

          &:hover {
            background: #090b0d;
            transition-duration: 0.2s;
          }
        `}
        href={url}
      >
        <FontAwesomeIcon
          icon={faArrowUpRightFromSquare}
          css={css`
            color: #d0dde9;
            margin: 0 0.8rem 0 0.8rem;
            font-size: 1.3em;
            transition-duration: 0.3s;
          `}
        />
        {children}
      </a>
    </div>
  );
};

export default LinkButton;
