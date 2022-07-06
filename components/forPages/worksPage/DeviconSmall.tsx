import * as React from "react";
import { css } from "@emotion/react";

type Props = {
  name: string;
  key: string;
};

const DeviconSmall: React.FC<Props> = ({ name }) => {
  return (
    <img
      src={
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/" +
        name +
        "/" +
        name +
        "-original.svg"
      }
      alt={name}
      css={css`
        width: 30px;
        margin-right: 10px;
      `}
    />
  );
};

export default DeviconSmall;
