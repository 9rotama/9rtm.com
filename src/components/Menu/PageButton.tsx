import { ThemeString } from "@/types/theme";
import clsx from "clsx";
import Link from "next/link";
import styles from "./PageButton.module.css";

type Props = {
  theme: ThemeString;
  name: string;
  path: string;
  isActive: boolean;
};

export default function PageButton({ theme, name, path, isActive }: Props) {
  const activeStr = isActive ? "Active" : "Passive";
  return (
    <div
      className={clsx([
        styles[`module${theme}`],
        styles[`module${activeStr}`],
        styles.module,
      ])}
    >
      <Link
        href={path}
        className={clsx([
          styles[`module${theme}`],
          styles[`module${activeStr}`],
          styles.link,
        ])}
        passHref
      >
        {name}
      </Link>
    </div>
  );
}
