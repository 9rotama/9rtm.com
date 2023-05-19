import type { Meta, StoryObj } from "@storybook/react";
import IsTeamIcon from "./IsTeamIcon";

const meta: Meta<typeof IsTeamIcon> = {
  title: "IsTeamIcon",
  component: IsTeamIcon,
};
export default meta;

type Story = StoryObj<typeof IsTeamIcon>;

export const IsTeamTrue: Story = {
  args: { isTeam: true },
};

export const IsTeamFalse: Story = {
  args: { isTeam: false },
};
