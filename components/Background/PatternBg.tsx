import { backgroundStateContext } from "../_common/Layout";
import { css } from "@emotion/react";
import { useContext } from "react";
import { backgroundTransitionDur } from "./Background";

export const PatternBg = () => {
  const backgroundState = useContext(backgroundStateContext);

  const patternBackgroundStyle = css`
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: -2;
    background-color: #d0dde9;
    background-image: linear-gradient(
        30deg,
        #acc8e3 12%,
        transparent 12.5%,
        transparent 87%,
        #acc8e3 87.5%,
        #acc8e3
      ),
      linear-gradient(
        150deg,
        #acc8e3 12%,
        transparent 12.5%,
        transparent 87%,
        #acc8e3 87.5%,
        #acc8e3
      ),
      linear-gradient(
        30deg,
        #acc8e3 12%,
        transparent 12.5%,
        transparent 87%,
        #acc8e3 87.5%,
        #acc8e3
      ),
      linear-gradient(
        150deg,
        #acc8e3 12%,
        transparent 12.5%,
        transparent 87%,
        #acc8e3 87.5%,
        #acc8e3
      ),
      linear-gradient(
        60deg,
        #acc8e377 25%,
        transparent 25.5%,
        transparent 75%,
        #acc8e377 75%,
        #acc8e377
      ),
      linear-gradient(
        60deg,
        #acc8e377 25%,
        transparent 25.5%,
        transparent 75%,
        #acc8e377 75%,
        #acc8e377
      );
    background-size: 74px 130px;
    background-position: 0 0, 0 0, 37px 65px, 37px 65px, 0 0, 37px 65px;
    opacity: ${backgroundState.switch ? "0.4" : "0.6"};

    transition-duration: ${backgroundTransitionDur}s;
  `;
  return <div css={patternBackgroundStyle} />;
};
