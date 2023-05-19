import type { Meta, StoryObj } from "@storybook/react";

import ContextBox from "./ContextBox";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";

const meta: Meta<typeof ContextBox> = {
  title: "ContextBox",
  component: ContextBox,
};

export default meta;

type Story = StoryObj<typeof ContextBox>;

export const Test: Story = {
  args: {
    pageIcon: faAddressBook,
    pageTitle: "pagetitle",
    pageDescription: "ページの説明",
  },
};
