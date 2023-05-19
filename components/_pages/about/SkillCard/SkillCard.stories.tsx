import type { Meta, StoryObj } from "@storybook/react";

import SkillCard from "./SkillCard";

const meta: Meta<typeof SkillCard> = {
  title: "SkillCard",
  component: SkillCard,
};

export default meta;

type Story = StoryObj<typeof SkillCard>;

export const normal: Story = {
  args: {
    name: "CSS3",
    iconSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    rank: 3,
    description: "CSS完全に理解した",
    url: "https://developer.mozilla.org/ja/docs/Web/CSS",
  },
};

export const longDesc: Story = {
  args: {
    name: "CSS3",
    iconSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    rank: 3,
    description:
      " CSS完全に理解したCSS完全に理解したCSS完全に理解したCSS完全に理解したCSS完全に理解したCSS完全に理解したCSS完全に理解したCSS完全に理解したCSS完全に理解したCSS完全に理解したCSS完全に理解したCSS完全に理解したCSS完全に理解したCSS完全に理解した",
    url: "https://developer.mozilla.org/ja/docs/Web/CSS",
  },
};
