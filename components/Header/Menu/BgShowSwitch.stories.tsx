import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import {
  showBackgroundContext,
  setShowBackgroundContext,
} from "../../_common/Layout";

import BgShowSwitch from "./BgShowSwitch";
import Background from "../../Background/Background";

const meta: Meta<typeof BgShowSwitch> = {
  title: "BgShowSwitch",
  component: BgShowSwitch,
};

export default meta;

type Story = StoryObj<typeof BgShowSwitch>;

export const Active: Story = {
  decorators: [
    (Story) => {
      const [showBackground, setShowBackground] = useState<boolean>(true);
      return (
        <showBackgroundContext.Provider value={showBackground}>
          <setShowBackgroundContext.Provider value={setShowBackground}>
            <Story />
          </setShowBackgroundContext.Provider>
        </showBackgroundContext.Provider>
      );
    },
  ],
};

export const Passive: Story = {
  decorators: [
    (Story) => {
      const [showBackground, setShowBackground] = useState<boolean>(false);
      return (
        <showBackgroundContext.Provider value={showBackground}>
          <setShowBackgroundContext.Provider value={setShowBackground}>
            <Story />
          </setShowBackgroundContext.Provider>
        </showBackgroundContext.Provider>
      );
    },
  ],
};
