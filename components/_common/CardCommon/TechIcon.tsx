import * as React from "react";
import { css } from "@emotion/react";
import Image, { StaticImageData } from "next/image";

type Props = {
  name: string;
  size: "medium" | "small";
  src: string | StaticImageData;
};

const getSizeValues = (size: "medium" | "small"): number => {
  if (size === "medium") {
    return 40;
  } else {
    return 30;
  }
};

const TechIcon = ({ name, size, src }: Props) => {
  const iconStyle = css`
    position: relative;
    width: ${getSizeValues(size)}px;
    height: ${getSizeValues(size)}px;
  `;

  return (
    <>
      <div css={iconStyle}>
        <Image src={src} layout="fill" objectFit="contain" alt={name} />
      </div>
    </>
  );
};

export default TechIcon;
