import * as React from "react"
import Image from "next/image"
import { css } from "@emotion/react"

type DeviconSmallProps = {
  name: string;
}

const DeviconSmall:React.FC<DeviconSmallProps> = ({ name }) => {
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
  )
}

export default DeviconSmall