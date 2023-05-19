import type { Meta, StoryObj } from "@storybook/react";

import ContextBoxIcon from "./ContextBoxIcon";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";

const meta: Meta<typeof ContextBoxIcon> = {
  title: "ContextBoxIcon",
  component: ContextBoxIcon,
};

export default meta;

type Story = StoryObj<typeof ContextBoxIcon>;

export const index: Story = {
  args: {
    pageIcon: faAddressBook,
  },
};
