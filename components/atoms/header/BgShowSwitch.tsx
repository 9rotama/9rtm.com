import { css } from "@emotion/react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceMehBlank } from "@fortawesome/free-solid-svg-icons";

type Props = {};

type colorTheme = {
  backgroundColor: string;
  textColor?: string;
};

const normalTheme: colorTheme = {
  backgroundColor: "transparent",
  textColor: "#252a34",
};

const activeTheme: colorTheme = {
  backgroundColor: "#263657",
  textColor: "#d0dde9",
};

const BgShowSwitch: React.FC<Props> = () => {
  const [checked, setChecked] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };

  const iconStyle = css`
    color: ${checked ? activeTheme.textColor : normalTheme.textColor};

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
    background-color: ${checked
      ? activeTheme.backgroundColor
      : normalTheme.backgroundColor};

    transition-duration: 0.3s;
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
      <FontAwesomeIcon icon={faFaceMehBlank} css={iconStyle}></FontAwesomeIcon>
      <input
        type="checkbox"
        css={css`
          ${inputStyle}
        `}
        checked={checked}
        onChange={handleChange}
      />
    </label>
  );
};

export default BgShowSwitch;
