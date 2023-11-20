import React from "react";
import styles from "./PageBoxWrapper.module.css";

export default function PageBoxWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.module}>
      <div className={styles.pageBox}>{children}</div>
    </div>
  );
}
