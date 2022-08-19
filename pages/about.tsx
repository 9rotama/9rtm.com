import * as React from "react";
import { css } from "@emotion/react";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import ContextBox from "../components/templates/ContextBox";
import ProfImage from "../components/atoms/about/ProfImage";
import { SkillCard } from "../components/organisms/about/SkillCard";
import CardWrapper from "../components/organisms/common/CardWrapper";

type Technology = {
  id: string;
  name: string;
  iconSrc: string;
  rank: number;
  description: string;
};

const AboutPage = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
      />
      <ContextBox
        pageIcon={faAddressCard}
        pageTitle="about me"
        pageDescription="自己紹介、スキルなど"
      >
        <h1>📘 profile</h1>
        <ProfImage />
        <div>
          <h2
            css={css`
              ${nameStyle}
            `}
          >
            9rotama
          </h2>
          <h3>game dev / UI design</h3>
          情報系大学の3年です。音楽ゲームが好きです。<br />
          主にクライアント側の開発に興味があります。
        </div>
        <h1>⌨️ i use</h1>
        <CardWrapper>
          {Skills.map((e) => (
            <SkillCard key={e.id + "-skillicon"} id={e.id} name={e.name} iconSrc={e.iconSrc} rank={e.rank} description={e.description} url={"9rtm.com"} />
          ))}
        </CardWrapper>
        
        <h1>🎮 i play</h1>
      </ContextBox>
    </>
  );
};

const Skills: Array<Technology> = [
  { 
    id: "unity",
    name: "Unity",
    iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg",
    rank: 4,
    description: "ゲームジャムやハッカソンの開発で使用。2D/3D両方経験。"
  },
  {
    id: "react",
    name: "React",
    iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    rank: 3,
    description: "最近はNext.js, Typescriptを利用。Webアプリとして動くものを作ってみたい。"
  },
  {
    id: "python",
    name: "Python3",
    iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    rank: 3,
    description: "レポートのグラフ作成やマクロの開発、簡単な画像処理等で使用。"
  },
  {
    id: "figma",
    name: "Figma",
    iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    rank: 4,
    description: "学内イベントのポスター、UIデザイン、スライド制作等で使用。"
  },
  { 
    id: "blender",
    name: "Blender",
    iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg",
    rank: 2,
    description: "サークルで勉強した後モーショングラフィックもどきの映像を作った。"
  },
  {
    id: "ubuntu",
    name: "Ubuntu",
    iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg",
    rank: 2,
    description: "新PCで使用中。"
  },
];

const nameStyle = css`
  display: inline-block;

  font-size: 1.5em;
  border-bottom: dotted #027775 5px;
`;

export default AboutPage;
