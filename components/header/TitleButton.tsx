import * as React from "react";
import Link from "next/link";
import { css } from "@emotion/react";

type TitleButtonProps = {
  name: string;
};

const TitleButton: React.FC<TitleButtonProps> = ({ name }) => {
  return (
    <div
      css={css`
        color: #252a34;
        text-decoration: none;
        font-size: 2em;
        font-weight: 500;
        padding: 0 10px 0 10px;
        margin-right: auto;

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
      `}
    >
      <Link href="/" passHref>
        {name}
      </Link>
    </div>
  );
};

export default TitleButton;
