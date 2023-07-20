import type { Meta, StoryObj } from "@storybook/react";
import SnsLinkButton from "./SnsLinkButton";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const meta: Meta<typeof SnsLinkButton> = {
  title: "SnsLinkButton",
  component: SnsLinkButton,
};

export default meta;

type Story = StoryObj<typeof SnsLinkButton>;

export const Normal: Story = {
  args: {
    icon: faGithub,
    url: "https://github.com/9rotama",
    hoverColor: "#9b5de5",
  },
};

export const Light: Story = {
  args: {
    icon: faGithub,
    url: "https://github.com/9rotama",
    hoverColor: "#f1edf6",
  },
};
