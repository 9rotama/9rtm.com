import * as React from "react"
import { css } from "@emotion/react"

type DeviconProps = {
  name: string;
}

const Devicon: React.FC<DeviconProps> = ({ name }) => {
  return (
    <img
      src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/"
      + name
      + "/"
      + name
      + "-original.svg"}
      alt={name}
      css={css`
        width: 45px;
        margin-right: 10px;
      `}
    />
  );
}

export default Devicon
