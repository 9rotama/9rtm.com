import { ThemeString } from "@/types/theme";
import clsx from "clsx";
import styles from "./Footer.module.css";

type Props = {
  theme: ThemeString;
};

export default function Footer({ theme }: Props) {
  return (
    <div className={clsx([styles[`module${theme}`], styles.module])}>
      © {new Date().getFullYear()} 9rotama
    </div>
  );
}
