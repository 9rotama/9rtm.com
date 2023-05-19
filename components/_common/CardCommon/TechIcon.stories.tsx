import type { Meta, StoryObj } from "@storybook/react";

import TechIcon from "./TechIcon";

const meta: Meta<typeof TechIcon> = {
  title: "TechIcon",
  component: TechIcon,
};

export default meta;

type Story = StoryObj<typeof TechIcon>;

export const Small: Story = {
  args: {
    name: "storybook",
    size: "small",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/storybook/storybook-original.svg",
  },
};

export const Medium: Story = {
  args: {
    name: "storybook",
    size: "medium",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/storybook/storybook-original.svg",
  },
};

export const NotSquare: Story = {
  args: {
    name: "go",
    size: "medium",
    src: "https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg",
  },
};
