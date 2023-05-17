import { useState } from "react";
import { css } from "@emotion/react";
import { cx } from "@emotion/css";

type Props = {
  text: string;
  children?: React.ReactNode;
};

export const ToolTip: React.FC<Props> = ({ text, children }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };
  const handleHide = () => {
    setShow(false);
  };

  const divStyle = css`
    position: relative;
  `;

  const toolTipStyle = css`
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%) translateY(-100%);

    background: #252f60ee;
    color: white;
    padding: 5px;
    border-radius: 4px;
    filter: drop-shadow(0px 2px 3px #252a3480);

    font-size: x-small;

    opacity: 0;
    transform-origin: bottom center;
    transition: opacity 0.3s, transform 0.3s;
  `;

  const toolTipVisibleStyle = css`
    opacity: 1;
    transform: translateX(-50%) translateY(-120%);
  `;

  return (
    <div onMouseEnter={handleShow} onMouseOut={handleHide} css={divStyle}>
      <div css={[toolTipStyle, show && toolTipVisibleStyle]}>{text}</div>
      {children}
    </div>
  );
};
