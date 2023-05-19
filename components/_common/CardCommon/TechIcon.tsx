import * as React from "react";
import { css } from "@emotion/react";

type Props = {
  name: string;
  size: "medium" | "small";
  src: string;
};

const getSizeValues = (size: "medium" | "small"): string => {
  if (size === "medium") {
    return "40px";
  } else {
    return "30px";
  }
};

const TechIcon = ({ name, size, src }: Props) => {
  const iconStyle = css`
    width: ${getSizeValues(size)};
    height: ${getSizeValues(size)};

    display: flex;
    justify-content: center;
    align-items: center;
  `;

  return (
    <div
      css={css`
        ${iconStyle}
      `}
    >
      <img src={src} alt={name} />
    </div>
  );
};

export default TechIcon;
