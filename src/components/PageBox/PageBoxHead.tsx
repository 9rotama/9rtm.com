import { ThemeString } from "@/types/theme";
import clsx from "clsx";
import styles from "./PageBoxHead.module.css";

type Props = {
  theme: ThemeString;
  children: React.ReactNode;
};

export default function PageBoxHead({ theme, children }: Props) {
  return (
    <h1 className={clsx([styles.module, styles[`module${theme}`]])}>
      {children}
    </h1>
  );
}
