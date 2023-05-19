import type { Meta, StoryObj } from "@storybook/react";

import ProfImage from "./ProfImage";

const meta: Meta<typeof ProfImage> = {
  title: "ProfImage",
  component: ProfImage,
};

export default meta;

type Story = StoryObj<typeof ProfImage>;

export const index: Story = {};
