import * as React from "react";
import { css } from "@emotion/react";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  url: string;
  children: React.ReactNode;
};

const LinkButton: React.FC<Props> = ({ url, children }) => {
  return (
    <a
      css={css`
        ${linkStyle}
      `}
      href={url}
    >
      <FontAwesomeIcon
        icon={faArrowUpRightFromSquare}
        css={css`
          ${iconStyle}
        `}
      />
      {children}
    </a>
  );
};

const linkStyle = css`
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
`;

const iconStyle = css`
  margin: 0 0.8rem 0 0.8rem;

  color: #d0dde9;
  font-size: 1.3em;

  transition-duration: 0.3s;
`;

export default LinkButton;
