import * as React from "react";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import ContextBox from "../components/templates/ContextBox";
import LinkButton from "../components/atoms/common/LinkButton";
import CardWrapper from "../components/organisms/common/CardWrapper";
import { WorkCard } from "../components/organisms/works/WorkCard";

type workContexts = {
  title: string;
  url: string;
  techStack: Array<string> /*deviconのurlにそのまま変換するため、devicon上の名前を参照する*/;
  description: string;
  isTeam: boolean;
};

const WorksPage = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
      />
      <ContextBox
        pageIcon={faBook}
        pageTitle="works"
        pageDescription="作ったもの"
      >
        <h1>🌎 web-apps</h1>
        <CardWrapper>
          {webApps.map((e) => (
            <WorkCard
              key={e.title + "-workscard"}
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
            <WorkCard
              key={e.title + "-workscard"}
              title={e.title}
              url={e.url}
              description={e.description}
              techStack={e.techStack}
              isTeam={e.isTeam}
            />
          ))}
        </CardWrapper>
        <h1>🎨 graphics / designs / others</h1>
        <LinkButton url="https://drive.google.com/drive/folders/1gOM3VzAkHeZK05HKfPlGGLTR5jneGcgQ?usp=sharing">
          jump to google drive
        </LinkButton>
      </ContextBox>
    </>
  );
};

const webApps: Array<workContexts> = [
  {
    title: "9rtm.com",
    url: "https://9rtm.com",
    techStack: ["nextjs", "typescript"],
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
    techStack: ["gatsby", "javascript"],
    description: "作品紹介ページ",
    isTeam: false,
  },
  {
    title: "web-slide",
    url: "https://web-slide-puce.vercel.app",
    techStack: ["react", "javascript"],
    description: "ダサいスライドを作れるwebアプリ",
    isTeam: true,
  },
  {
    title: "re-translate-bot",
    url: "https://github.com/9rotama/re-translate-bot",
    techStack: ["python", "amazonwebservices"],
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

export default WorksPage;
