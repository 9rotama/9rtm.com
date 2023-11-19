import { ThemeString } from "@/types/theme";
import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import styles from "./PageBox.module.css";

type Props = {
  theme: ThemeString;
  icon: IconDefinition;
  title: string;
  description: string;
  children: React.ReactNode;
};

export default function PageBox({
  theme,
  icon,
  title,
  description,
  children,
}: Props) {
  return (
    <div className={clsx([styles[`module${theme}`], styles.module])}>
      <div className={styles.meta}>
        <div className={styles.iconBackground}>
          <FontAwesomeIcon icon={icon} className={styles.icon} />
        </div>
        <div className={clsx(styles.title)}>{title}</div>
        <p className={styles.description}>{description}</p>
      </div>

      {children}
    </div>
  );
}
