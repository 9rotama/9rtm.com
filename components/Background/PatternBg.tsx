import { backgroundStateContext } from "../../const/contexts";
import { css } from "@emotion/react";
import { useContext } from "react";
import { backgroundTransitionDur } from "./Background";
import { themeContext } from "../../const/contexts";

export const PatternBg = () => {
  const backgroundState = useContext(backgroundStateContext);
  const theme = useContext(themeContext);

  const patternColor = theme.background.pattern.patternColor;
  const bgColor = theme.background.pattern.backgroundColor;

  const patternBackgroundStyle = css`
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: -2;
    background-color: ${bgColor};
    background-image: linear-gradient(
        30deg,
        ${patternColor} 12%,
        transparent 12.5%,
        transparent 87%,
        ${patternColor} 87.5%,
        ${patternColor}
      ),
      linear-gradient(
        150deg,
        ${patternColor} 12%,
        transparent 12.5%,
        transparent 87%,
        ${patternColor} 87.5%,
        ${patternColor}
      ),
      linear-gradient(
        30deg,
        ${patternColor} 12%,
        transparent 12.5%,
        transparent 87%,
        ${patternColor} 87.5%,
        ${patternColor}
      ),
      linear-gradient(
        150deg,
        ${patternColor} 12%,
        transparent 12.5%,
        transparent 87%,
        ${patternColor} 87.5%,
        ${patternColor}
      ),
      linear-gradient(
        60deg,
        ${patternColor}77 25%,
        transparent 25.5%,
        transparent 75%,
        ${patternColor}77 75%,
        ${patternColor}77
      ),
      linear-gradient(
        60deg,
        ${patternColor}77 25%,
        transparent 25.5%,
        transparent 75%,
        ${patternColor}77 75%,
        ${patternColor}77
      );
    background-size: 74px 130px;
    background-position: 0 0, 0 0, 37px 65px, 37px 65px, 0 0, 37px 65px;
    opacity: ${backgroundState.switch ? "0.4" : "0.6"};

    transition-duration: ${backgroundTransitionDur}s;
  `;
  return <div css={patternBackgroundStyle} />;
};
