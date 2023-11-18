import { dosis } from "@/const/fonts";
import { ThemeString } from "@/types/theme";
import clsx from "clsx";
import Link from "next/link";
import Menu from "../Menu/Menu";
import styles from "./Header.module.css";

type Props = {
  theme: ThemeString;
};

export default function Header({ theme }: Props) {
  return (
    <header
      className={clsx([
        styles[`module${theme}`],
        styles.module,
        dosis.className,
      ])}
    >
      <Link href="/" className={styles.titleButton}>
        9RTM.COM
      </Link>
      <Menu />
    </header>
  );
}
