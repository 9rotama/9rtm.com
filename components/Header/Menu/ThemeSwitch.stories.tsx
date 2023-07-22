import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { themeContext, setThemeContext } from "../../../const/contexts";
import { LightTheme } from "../../../const/themes";

import { ThemeSwitch } from "./ThemeSwitch";

const meta: Meta<typeof ThemeSwitch> = {
  title: "ThemeSwitch",
  component: ThemeSwitch,
};

export default meta;

type Story = StoryObj<typeof ThemeSwitch>;

export const Index: Story = {
  decorators: [
    (Story) => {
      const [theme, setTheme] = useState(LightTheme);
      return (
        <themeContext.Provider value={theme}>
          <setThemeContext.Provider value={setTheme}>
            <Story />
          </setThemeContext.Provider>
        </themeContext.Provider>
      );
    },
  ],
};
