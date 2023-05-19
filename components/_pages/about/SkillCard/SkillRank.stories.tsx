import type { Meta, StoryObj } from "@storybook/react";

import SkillRank from "./SkillRank";

const meta: Meta<typeof SkillRank> = {
  title: "SkillRank",
  component: SkillRank,
};

export default meta;

type Story = StoryObj<typeof SkillRank>;

export const Zero: Story = {
  args: {
    rank: 0,
  },
};

export const Three: Story = {
  args: {
    rank: 3,
  },
};

export const Five: Story = {
  args: {
    rank: 5,
  },
};
