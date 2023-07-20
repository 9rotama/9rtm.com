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
  date: new Date(2020, 9),
  url: "https://9rtm.com",
  screenshot: "https://avatars.githubusercontent.com/u/65887771?v=4",
  description: "せつめいせつめい",
  techStack: [
    {
      name: "react",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
  ], //アイコンのURL(文字列)の配列
  isTeam: true,
};

export const Normal: Story = {
  args: {
    data: normalWork,
  },
};

const longTextWork: Work = {
  title: "TestTitleestTitleestTitleestTitle",
  date: new Date(2020, 9),
  url: "https://9rtm.com",
  screenshot: "https://avatars.githubusercontent.com/u/65887771?v=4",
  description:
    "せつめいせつめいせつめいせつめいせつめいせつめいせつめいせつめいせつめいせつめいせつめいせつめいせつめいせつめいせつめいせつめいせつめいせつめい",
  techStack: [
    {
      name: "react",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
  ], //アイコンのURL(文字列)の配列
  isTeam: true,
};

export const LongText: Story = {
  args: {
    data: longTextWork,
  },
};
