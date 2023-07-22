import { css } from "@emotion/react";

import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChangeEventHandler, useContext } from "react";
import { themeContext } from "../../../const/contexts";

type Props = {
  icon: IconDefinition;
  isActive: boolean;
  handleClick: ChangeEventHandler<HTMLInputElement>;
};

export const SwitchButton = ({ icon, isActive, handleClick }: Props) => {
  const theme = useContext(themeContext);

  const labelStyle = css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: 50vh;
    border: 0.01px solid ${theme.header.bgShowSwitch.active.borderColor};
    background-color: ${isActive
      ? theme.header.bgShowSwitch.active.backgroundColor
      : theme.header.bgShowSwitch.passive.backgroundColor};

    transition-duration: 0.3s;
    &:hover {
      background-color: ${isActive
        ? theme.header.bgShowSwitch.active.backgroundColorHover
        : theme.header.bgShowSwitch.passive.backgroundColorHover};
    }
  `;

  const iconStyle = css`
    color: ${isActive
      ? theme.header.bgShowSwitch.active.innerColor
      : theme.header.bgShowSwitch.passive.innerColor};

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
      <FontAwesomeIcon icon={icon} css={iconStyle}></FontAwesomeIcon>
      <input
        type="checkbox"
        css={css`
          ${inputStyle}
        `}
        checked={isActive}
        onChange={handleClick}
      />
    </label>
  );
};
