import * as React from "react";
import { useContext } from "react";

import { css } from "@emotion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGroup, faUser } from "@fortawesome/free-solid-svg-icons";
import { themeContext } from "../../../../const/contexts";

type Props = {
  isTeam: boolean;
};

const IsTeamIcon = ({ isTeam }: Props) => {
  const theme = useContext(themeContext);

  const iconStyle = css`
    color: ${theme.contextbox.card.teamIconColor};
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
