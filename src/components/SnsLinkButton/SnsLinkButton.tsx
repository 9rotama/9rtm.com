import { Sns } from "@/types/sns";
import { ThemeString } from "@/types/theme";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import styles from "./SnsLinkButton.module.css";

type Props = {
  theme: ThemeString;
  name: Sns;
  url: string;
  icon: IconDefinition;
};

export default function SnsLinkButton({ theme, name, url, icon }: Props) {
  return (
    <a
      className={clsx([
        styles[`module${theme}`],
        styles[`module${name}`],
        styles.module,
      ])}
      href={url}
    >
      <FontAwesomeIcon icon={icon} className={styles.icon} />
    </a>
  );
}
