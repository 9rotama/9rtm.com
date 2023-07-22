import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { SwitchButton } from "./SwitchButton";

import { ThemeSwitch } from "./ThemeSwitch";

const meta: Meta<typeof SwitchButton> = {
  title: "SwitchButton",
  component: SwitchButton,
};

export default meta;

type Story = StoryObj<typeof SwitchButton>;

export const Active: Story = {
  args: { isActive: true },
};

export const Passive: Story = {
  args: { isActive: false },
};
