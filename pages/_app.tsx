import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/_common/Layout";
import { LightTheme, Themes } from "../const/themes";
import { themeContext, setThemeContext } from "../const/contexts";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<Themes>(LightTheme);

  return (
    <themeContext.Provider value={theme}>
      <setThemeContext.Provider value={setTheme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </setThemeContext.Provider>
    </themeContext.Provider>
  );
}

export default MyApp;
