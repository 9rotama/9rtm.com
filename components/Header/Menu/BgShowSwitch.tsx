import { css } from "@emotion/react";
import { useContext } from "react";
import {
  backgroundStateContext,
  setBackgroundStateContext,
} from "../../_common/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCube } from "@fortawesome/free-solid-svg-icons";

type colorTheme = {
  backgroundColor: string;
  backgroundColorHover: string;
  textColor?: string;
};

const normalTheme: colorTheme = {
  backgroundColor: "transparent",
  backgroundColorHover: "#252a3420",
  textColor: "#252a34",
};

const activeTheme: colorTheme = {
  backgroundColor: "#263657",
  backgroundColorHover: "#11141a",
  textColor: "#d0dde9",
};

const BgShowSwitch = () => {
  const backgroundState = useContext(backgroundStateContext);
  const setBackgroundState = useContext(setBackgroundStateContext);

  const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setBackgroundState({ render: true, switch: true });
    } else {
      setBackgroundState({ render: true, switch: false });

      setTimeout(() => {
        setBackgroundState({ render: false, switch: false });
      }, 300);
    }
  };

  const iconStyle = css`
    color: ${backgroundState.switch
      ? activeTheme.textColor
      : normalTheme.textColor};

    transition-duration: 0.3s;
  `;

  const labelStyle = css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: 50vh;
    border: 0.01px solid #252a3442;
    background-color: ${backgroundState.switch
      ? activeTheme.backgroundColor
      : normalTheme.backgroundColor};

    transition-duration: 0.3s;
    &:hover {
      background-color: ${backgroundState.switch
        ? activeTheme.backgroundColorHover
        : normalTheme.backgroundColorHover};
    }
  `;

  const inputStyle = css`
    position: absolute;
    display: none;
  `;
  return (
    <label
      css={css`
        ${labelStyle}
      `}
    >
      <FontAwesomeIcon icon={faCube} css={iconStyle}></FontAwesomeIcon>
      <input
        type="checkbox"
        css={css`
          ${inputStyle}
        `}
        checked={backgroundState.switch}
        onChange={handleClick}
      />
    </label>
  );
};

export default BgShowSwitch;
