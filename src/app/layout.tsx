"use client";

import HeaderContainer from "@/components/Header/HeaderContainer";
import KaomojiBackgroundContainer from "@/components/KaomojiBackground/KaomojiBackgroundContainer";
import PatternBackgroundContainer from "@/components/PatternBackground/PatternBackgroundContainer";
import { dosis, inter, m_plus_1 } from "@/const/fonts";
import { useTheme } from "@/hooks/useTheme";
import { Theme } from "@/types/theme";
import "@fortawesome/fontawesome-svg-core/styles.css";
import clsx from "clsx";
import React, { useContext, useState } from "react";
import {
  kaomojiBackgroundStateContext,
  setKaomojiBackgroundStateContext,
  setThemeContext,
  themeContext,
} from "../const/contexts";
import "../styles/globals.css";
import "../styles/variables.css";
import styles from "./layout.module.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<Theme>("light");
  const [kaomojiBackgroundState, setKaomojiBackgroundState] = useState({
    render: true,
    switch: true,
  });
  return (
    <html lang="ja">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body
        className={clsx([dosis.variable, m_plus_1.variable, inter.variable])}
      >
        <themeContext.Provider value={theme}>
          <setThemeContext.Provider value={setTheme}>
            <kaomojiBackgroundStateContext.Provider
              value={kaomojiBackgroundState}
            >
              <setKaomojiBackgroundStateContext.Provider
                value={setKaomojiBackgroundState}
              >
                <MainLayout>{children}</MainLayout>
              </setKaomojiBackgroundStateContext.Provider>
            </kaomojiBackgroundStateContext.Provider>
          </setThemeContext.Provider>
        </themeContext.Provider>
      </body>
    </html>
  );
}

function MainLayout({ children }: { children: React.ReactNode }) {
  const kaomojiBackgroundState = useContext(kaomojiBackgroundStateContext);
  const theme = useTheme();

  return (
    <main className={clsx([styles[`main${theme}`], styles.main])}>
      <div className={styles.header}>
        <HeaderContainer />
      </div>
      <div className={styles.background}>
        <PatternBackgroundContainer />
      </div>
      <div
        className={clsx([
          styles.background,
          kaomojiBackgroundState.switch ? undefined : styles.kaomojiOff,
        ])}
      >
        {kaomojiBackgroundState.render ? (
          <KaomojiBackgroundContainer />
        ) : undefined}
      </div>
      <div className={styles.page}>{children}</div>
    </main>
  );
}
