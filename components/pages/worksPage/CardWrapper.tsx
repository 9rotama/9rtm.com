import * as React from "react"
import { css } from "@emotion/react"

type CardWrapperProps = {
  children?: React.ReactNode;
}

const CardWrapper: React.FC<CardWrapperProps> = ({ children }) => {
  return (
    <div
      css={css`
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
      `}
    >
      {children}
    </div>
  )
}

export default CardWrapper
