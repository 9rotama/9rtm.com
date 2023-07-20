import { css } from "@emotion/react";
import Image from "next/image";

const width = 180;
const height = 180;

const ProfImage = () => {
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

  return (
    <Image
      src="https://avatars.githubusercontent.com/u/65887771?v=4"
      alt={"prof"}
      width={width}
      height={height}
      css={css`
        ${profImgStyle}
      `}
    />
  );
};

export default ProfImage;
