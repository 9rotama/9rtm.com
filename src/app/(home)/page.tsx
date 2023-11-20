"use client";

import SnsLinkButtonContainer from "@/components/SnsLinkButton/SnsLinkButtonContainer";
import WelcomeContainer from "@/components/Welcome/WelcomeContainer";
import { snsLinks } from "@/const/links";
import { useTheme } from "@/hooks/useTheme";
import clsx from "clsx";
import styles from "./page.module.css";

export default function Home() {
  const theme = useTheme();
  return (
    <div className={clsx([styles.module, styles[`module${theme}`]])}>
      <WelcomeContainer />
      <div className={styles.separator} />
      <div className={styles.snsLinks}>
        {snsLinks.map((e) => (
          <SnsLinkButtonContainer
            key={e.name + "-snslinks"}
            name={e.name}
            icon={e.icon}
            url={e.url}
          />
        ))}
      </div>
    </div>
  );
}
