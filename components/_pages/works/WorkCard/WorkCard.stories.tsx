import type { Meta, StoryObj } from "@storybook/react";

import WorkCard from "./WorkCard";
import { Work } from "../../../../types/work";

const meta: Meta<typeof WorkCard> = {
  title: "WorkCard",
  component: WorkCard,
};

export default meta;

type Story = StoryObj<typeof WorkCard>;

const normalWork: Work = {
  title: "TestTitle",
  url: "https://9rtm.com",
  screenshot: {
    url: "https://avatars.githubusercontent.com/u/65887771?v=4",
  },
  description: "せつめいせつめい",
  techStack: [
    {
      name: "react",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
  ], //アイコンのURL(文字列)の配列
  isTeam: true,
  type: "game",
};

export const Normal: Story = {
  args: {
    data: normalWork,
  },
};

const longTextWork: Work = {
  title: "TestTitleestTitleestTitleestTitle",
  url: "https://9rtm.com",
  screenshot: {
    url: "https://avatars.githubusercontent.com/u/65887771?v=4",
  },
  description:
    "せつめいせつめいせつめいせつめいせつめいせつめいせつめいせつめいせつめいせつめいせつめいせつめいせつめいせつめいせつめいせつめいせつめいせつめい",
  techStack: [
    {
      name: "react",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
  ], //アイコンのURL(文字列)の配列
  isTeam: true,
  type: "game",
};

export const LongText: Story = {
  args: {
    data: longTextWork,
  },
};
