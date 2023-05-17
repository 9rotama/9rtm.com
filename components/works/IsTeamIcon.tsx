import * as React from "react";
import { css } from "@emotion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGroup, faUser } from "@fortawesome/free-solid-svg-icons";

type CardProps = {
  isTeam?: boolean;
};

const IsTeamIcon: React.FC<CardProps> = ({ isTeam }) => {
  const iconStyle = css`
    position: absolute;
    bottom: 17px;
    right: 8%;

    margin-bottom: auto;

    color: #252f6022;
    font-size: 2em;
  `;

  return (
    <FontAwesomeIcon
      icon={isTeam ? faUserGroup : faUser}
      css={css`
        ${iconStyle}
      `}
    />
  );
};

export default IsTeamIcon;
