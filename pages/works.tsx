import * as React from "react";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import ContextBox from "../components/ContextBox";
import LinkButton from "../components/LinkButton";
import CardWrapper from "../components/pages/worksPage/CardWrapper";
import Card from "../components/pages/worksPage/Card";

type workContexts = {
  title: string;
  url: string;
  techStack: Array<string> /*deviconのurlにそのまま変換するため、devicon上の名前を参照する*/;
  description: string;
  isTeam: boolean;
};

const webApps: Array<workContexts> = [
  {
    title: "9rtm.com",
    url: "https://9rtm.com",
    techStack: ["react", "gatsby"],
    description: "ポートフォリオ",
    isTeam: false,
  },
  {
    title: "arcwebtool",
    url: "https://9rotama.github.io/arcwebtool",
    techStack: ["javascript", "bootstrap"],
    description: "譜面制作用マクロ",
    isTeam: false,
  },
  {
    title: "tegei.github.io/works",
    url: "https://tegei.github.io/works",
    techStack: ["react", "gatsby"],
    description: "作品紹介ページ",
    isTeam: false,
  },
  {
    title: "web-slide",
    url: "https://web-slide-puce.vercel.app",
    techStack: ["react"],
    description: "ダサいスライドを作れるwebアプリ",
    isTeam: true,
  },
  {
    title: "re-translate-bot",
    url: "https://github.com/9rotama/re-translate-bot",
    techStack: ["python", "heroku"],
    description: "Discordのメッセージを自動で再翻訳",
    isTeam: false,
  },
];

const games: Array<workContexts> = [
  {
    title: "SkyWitches",
    url: "https://9rotama.itch.io/skywitches",
    techStack: ["unity"],
    description: "ホウキの魔女を操作するレースゲーム",
    isTeam: true,
  },
  {
    title: "BeySweets",
    url: "https://potekumakun.itch.io/bey-sweets",
    techStack: ["unity"],
    description: "お菓子なコマで遊ぶゲーム",
    isTeam: true,
  },
  {
    title: "Solitude Sniper",
    url: "https://unityroom.com/games/solitude-sniper",
    techStack: ["unity"],
    description: "スナイパーFPS",
    isTeam: true,
  },
];

const WorksPage = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
      />
      <ContextBox pageIcon={faBook} pageTitle="works">
        <h1>🌎 web-apps</h1>
        <CardWrapper>
          {webApps.map((e) => (
            <Card
              key={e.title}
              title={e.title}
              url={e.url}
              description={e.description}
              techStack={e.techStack}
              isTeam={e.isTeam}
            />
          ))}
        </CardWrapper>
        <h1>🕹️ games</h1>
        <CardWrapper>
          {games.map((e) => (
            <Card
              key={e.title}
              title={e.title}
              url={e.url}
              description={e.description}
              techStack={e.techStack}
              isTeam={e.isTeam}
            />
          ))}
        </CardWrapper>
        <h1>🎨 graphics / designs / others</h1>
        <LinkButton
          color="#FF2E63"
          hoverColor="#c21943"
          url="https://drive.google.com/drive/folders/1gOM3VzAkHeZK05HKfPlGGLTR5jneGcgQ?usp=sharing"
        >
          jump to drive
        </LinkButton>
      </ContextBox>
    </>
  );
};

export default WorksPage;
