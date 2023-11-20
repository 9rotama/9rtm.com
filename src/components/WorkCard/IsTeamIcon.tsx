import { ThemeString } from "@/types/theme";
import { faUser, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import styles from "./IsTeamIcon.module.css";

type Props = {
  theme: ThemeString;
  isTeam: boolean;
};

export default function IsTeamIcon({ theme, isTeam }: Props) {
  return (
    <FontAwesomeIcon
      icon={isTeam ? faUserGroup : faUser}
      className={clsx([styles.module, styles[`module${theme}`]])}
    />
  );
}
