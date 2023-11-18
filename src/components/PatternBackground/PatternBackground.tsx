import { ThemeString } from "@/types/theme";
import clsx from "clsx";
import styles from "./PatternBackground.module.css";

type Props = {
  theme: ThemeString;
};

export default function PatternBackground({ theme }: Props) {
  return <div className={clsx([styles[`module${theme}`], styles.module])} />;
}
