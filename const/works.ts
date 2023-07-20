import { Work } from "../types/work";

import nextImg from "../public/assets/images/techicon/next-js.svg";
import pythonImg from "../public/assets/images/techicon/python.webp";
import unityImg from "../public/assets/images/techicon/unity.png";
import tsImg from "../public/assets/images/techicon/ts.png";
import p5Img from "../public/assets/images/techicon/p5.svg";
import threeImg from "../public/assets/images/techicon/three.png";
import bootstrapImg from "../public/assets/images/techicon/bootstrap.png";
import prismaImg from "../public/assets/images/techicon/prisma.png";

import krtmcomSS from "../public/assets/images/screenshots/9rtmcom.png";
import arcwebtoolSS from "../public/assets/images/screenshots/arcwebtool.png";
import retranslatebotSS from "../public/assets/images/screenshots/re-translate-bot.jpeg";
import skywitchesSS from "../public/assets/images/screenshots/skywitches.webp";
import whackahoodySS from "../public/assets/images/screenshots/whackahoody.png";
import beysweetsSS from "../public/assets/images/screenshots/beysweets.webp";
import moodlelinebotSS from "../public/assets/images/screenshots/moodlelinebot.png";

export const works: Work[] = [
  {
    title: "moodlelinebot",
    date: new Date(2023, 3),
    url: "https://github.com/9rotama/moodle-line-bot",
    screenshot: moodlelinebotSS,
    description: "moodleのコース内の予定を表示・共有できるlinebot",
    techStack: [
      { name: "TypeScript", icon: tsImg },
      { name: "Prisma", icon: prismaImg },
    ],
    isTeam: false,
  },
  {
    title: "whack-a-hoody",
    date: new Date(2023, 3),
    url: "https://whack-a-hoody.vercel.app/",
    screenshot: whackahoodySS,
    description: "フードっ子たたきゲーム",
    techStack: [{ name: "p5.js", icon: p5Img }],
    isTeam: false,
  },
  {
    title: "re-translate-bot",
    date: new Date(2022, 6),
    url: "https://github.com/9rotama/re-translate-bot",
    screenshot: retranslatebotSS,
    description: "ムダ翻訳bot",
    techStack: [{ name: "Python", icon: pythonImg }],
    isTeam: false,
  },
  {
    title: "9rtm.com",
    date: new Date(2022, 5),
    url: "https://9rtm.com",
    screenshot: krtmcomSS,
    description: "ポートフォリオ",
    techStack: [
      { name: "Next.js", icon: nextImg },
      { name: "TypeScript", icon: tsImg },
      { name: "three.js", icon: threeImg },
    ],
    isTeam: false,
  },
  {
    title: "BeySweets",
    date: new Date(2022, 4),
    url: "https://potekumakun.itch.io/bey-sweets",
    screenshot: beysweetsSS,
    description: "お菓子なコマを弾き出せ",
    techStack: [{ name: "Unity", icon: unityImg }],
    isTeam: false,
  },
  {
    title: "SkyWitches",
    date: new Date(2022, 3),
    url: "https://9rotama.itch.io/skywitches",
    screenshot: skywitchesSS,
    description: "ホウキの魔女を操作するレースゲーム",
    techStack: [{ name: "Unity", icon: unityImg }],
    isTeam: false,
  },
  {
    title: "arcwebtool",
    date: new Date(2021, 10),
    url: "https://9rotama.github.io/arcwebtool/",
    screenshot: arcwebtoolSS,
    description: "譜面制作用マクロ",
    techStack: [{ name: "Bootstrap", icon: bootstrapImg }],
    isTeam: false,
  },
];
