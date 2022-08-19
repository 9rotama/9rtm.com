import * as React from "react";
import { css } from "@emotion/react";

type Props = {
  src: string;
  key: string;
};

const DeviconSmall: React.FC<Props> = ({ src }) => {
  return (
    <img
      src={src}
      alt={src}
      css={css`
        ${iconStyle}
      `}
    />
  );
};

const iconStyle = css`
  width: 30px;
  margin-right: 10px;
`;

export default DeviconSmall;
