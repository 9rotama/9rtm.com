import * as React from "react";
import Link from "next/link";
import { css } from "@emotion/react";

type Props = {
  name: string;
};

const TitleButton = ({ name }: Props) => {
  const titleStyle = css`
    padding: 0 10px 0 10px;
    margin-right: auto;

    text-decoration: none;
    color: #252a34;
    font-family: "Dosis", "M PLUS 1", sans-serif;
    font-size: 2.3em;
    font-weight: 400;
    width: fit-content;

    transition-duration: 0.3s;

    @media (max-width: 960px) {
      & {
        font-size: 1.5em;
      }
    }

    &:hover {
      transform: scale(1.2);

      transition-duration: 0.3s;
    }
    &:active {
      color: #ff2e63;

      transition-duration: 0.3s;
    }
  `;

  return (
    <div
      css={css`
        ${titleStyle}
      `}
    >
      <Link href="/" passHref>
        {name}
      </Link>
    </div>
  );
};

export default TitleButton;
