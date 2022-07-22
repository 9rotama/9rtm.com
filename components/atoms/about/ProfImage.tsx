import * as React from "react";
import { css } from "@emotion/react";

const ProfImage = () => {
  return (
    <img
      src="https://avatars.githubusercontent.com/u/65887771?v=4"
      alt={"prof"}
      css={css`
        ${profImgStyle}
      `}
    />
  );
};

const profImgStyle = css`
  position: relative;
  margin: 20px 0 20px 0;

  width: 180px;
  height: 180px;
  border-radius: 50%;

  transition-duration: 0.2s;

  &:hover {
    border-radius: 10%;

    transition-duration: 0.2s;
  }
`;

export default ProfImage;
