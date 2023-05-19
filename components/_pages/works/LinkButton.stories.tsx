import type { Meta, StoryObj } from "@storybook/react";

import LinkButton from "./LinkButton";

const meta: Meta<typeof LinkButton> = {
  title: "LinkButton",
  component: LinkButton,
};

export default meta;

type Story = StoryObj<typeof LinkButton>;

export const ShortText: Story = {
  args: {
    url: "twitter.com",
    children: "jump to twitter",
  },
};

export const LongText: Story = {
  args: {
    url: "twitter.com",
    children: "jump to twitter hello hello hello hello hello hello hello hello",
  },
};
