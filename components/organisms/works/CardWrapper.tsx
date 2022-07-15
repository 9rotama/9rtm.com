import * as React from "react";
import { css } from "@emotion/react";

type Props = {
  children?: React.ReactNode;
};

const CardWrapper: React.FC<Props> = ({ children }) => {
  return (
    <div
      css={css`
        ${wrapperStyle}
      `}
    >
      {/*ラッパーで囲んだCardがchildrenに入る*/}
      {children}
    </div>
  );
};

const wrapperStyle = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export default CardWrapper;
