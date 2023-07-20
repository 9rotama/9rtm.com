import type { Meta, StoryObj } from "@storybook/react";

import ToolTip from "./ToolTip";
import TechIcon from "./CardCommon/TechIcon";

const meta: Meta<typeof ToolTip> = {
  title: "ToolTip",
  component: ToolTip,
};

export default meta;

type Story = StoryObj<typeof ToolTip>;

export const Tech: Story = {
  args: {
    text: "storybook",
    children: (
      <TechIcon
        name="storybook"
        size="small"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/storybook/storybook-original.svg"
      ></TechIcon>
    ),
  },
};
