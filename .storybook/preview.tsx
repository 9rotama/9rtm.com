import * as React from "react";
import type { Preview } from "@storybook/react";
import { GlobalStyles } from "../components/_common/GlobalStyles";
import { themeContext } from "../const/contexts";

import "../styles/globals.css";
import { LightTheme, Themes } from "../const/themes";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const decorators = [
  (Story) => {
    const [theme, setTheme] = React.useState<Themes>(LightTheme);

    return (
      <>
        <themeContext.Provider value={theme}>
          <GlobalStyles />
          <Story />
        </themeContext.Provider>
      </>
    );
  },
];

export default preview;
