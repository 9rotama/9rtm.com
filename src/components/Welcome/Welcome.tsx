import { ThemeString } from "@/types/theme";
import clsx from "clsx";
import styles from "./Welcome.module.css";

type Props = {
  theme: ThemeString;
};

export default function Welcome({ theme }: Props) {
  return (
    <div className={clsx([styles.module, styles[`module${theme}`]])}>
      welcome.
    </div>
  );
}
