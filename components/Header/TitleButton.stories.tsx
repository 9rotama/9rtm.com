import type { Meta, StoryObj } from "@storybook/react";

import TitleButton from "./TitleButton";

const meta: Meta<typeof TitleButton> = {
  title: "TitleButton",
  component: TitleButton,
};

export default meta;

type Story = StoryObj<typeof TitleButton>;

export const BgSwitch: Story = {
  args: {
    name: "9RTM.COM",
  },
};
