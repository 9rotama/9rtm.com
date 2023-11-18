import { dosis } from "@/const/fonts";
import clsx from "clsx";
import styles from "./not-found.module.css";

export default function Notfound() {
  return (
    <div className={clsx([styles.module, dosis.className])}>Page Not Found</div>
  );
}
