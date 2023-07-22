import { useContext } from "react";
import { css } from "@emotion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { themeContext } from "../../../const/contexts";

type Props = {
  icon: IconDefinition;
  url: string;
  hoverColor: string;
};

const SnsLinkButton = ({ icon, url, hoverColor }: Props) => {
  const theme = useContext(themeContext);

  const linkStyle = css`
    display: flex;

    background: ${theme.home.snsLinkButton.backgroundColor};
    width: 50px;
    height: 50px;
    padding: 2px;
    border-radius: 50%;

    transition-duration: 0.2s;

    color: ${theme.home.snsLinkButton.innerColor};

    &:hover {
      background: #253a60a0;
      color: #ffffffdd;
      transition-duration: 0.2s;
    }
  `;

  const iconStyle = css`
    margin: auto;
    font-size: 1.5em;
  `;

  return (
    <a
      href={url}
      css={css`
        ${linkStyle}
        &:hover {
          background: ${hoverColor};
        }
      `}
    >
      <FontAwesomeIcon
        icon={icon}
        css={css`
          ${iconStyle}
        `}
      />
    </a>
  );
};

export default SnsLinkButton;
