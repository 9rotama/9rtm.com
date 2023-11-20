import { ThemeString } from "@/types/theme";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import styles from "./SwitchButton.module.css";

type Props = {
  theme: ThemeString;
  icon: IconDefinition;
  isActive: boolean;
};

export default function SwitchButton({ theme, icon, isActive }: Props) {
  const activeStr = isActive ? "Active" : "Passive";

  return (
    <div
      className={clsx([
        styles[`module${theme}`],
        styles[`module${activeStr}`],
        styles.module,
      ])}
    >
      <FontAwesomeIcon
        className={clsx([
          styles[`module${theme}`],
          styles[`module${activeStr}`],
          styles.icon,
        ])}
        icon={icon}
      />
    </div>
  );
}
