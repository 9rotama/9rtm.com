import type { Meta, StoryObj } from "@storybook/react";

import MenuButton from "./MenuButton";

const meta: Meta<typeof MenuButton> = {
  title: "MenuButton",
  component: MenuButton,
};

export default meta;

type Story = StoryObj<typeof MenuButton>;

export const Passive: Story = {
  args: {
    name: "page",
    path: "/",
    isActive: false,
  },
};

export const Active: Story = {
  args: {
    name: "page",
    path: "/",
    isActive: true,
  },
};
