import * as React from "react";
import { css } from "@emotion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGroup, faUser } from "@fortawesome/free-solid-svg-icons";

type Props = {
  isTeam: boolean;
};

const IsTeamIcon = ({ isTeam }: Props) => {
  const iconStyle = css`
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
