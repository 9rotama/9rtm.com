import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import {
  backgroundStateContext,
  setBackgroundStateContext,
} from "../../_common/Layout";

import BgShowSwitch from "./BgShowSwitch";

const meta: Meta<typeof BgShowSwitch> = {
  title: "BgShowSwitch",
  component: BgShowSwitch,
};

export default meta;

type Story = StoryObj<typeof BgShowSwitch>;

export const Active: Story = {
  decorators: [
    (Story) => {
      const [backgroundState, setBackgroundState] = useState({
        render: true,
        switch: true,
      });
      return (
        <backgroundStateContext.Provider value={backgroundState}>
          <setBackgroundStateContext.Provider value={setBackgroundState}>
            <Story />
          </setBackgroundStateContext.Provider>
        </backgroundStateContext.Provider>
      );
    },
  ],
};

export const Passive: Story = {
  decorators: [
    (Story) => {
      const [backgroundState, setBackgroundState] = useState({
        render: true,
        switch: false,
      });
      return (
        <backgroundStateContext.Provider value={backgroundState}>
          <setBackgroundStateContext.Provider value={setBackgroundState}>
            <Story />
          </setBackgroundStateContext.Provider>
        </backgroundStateContext.Provider>
      );
    },
  ],
};
