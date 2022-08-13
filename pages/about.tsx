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
            <SkillCard key={e.id + "-skillicon"} id={e.id} name={e.name} iconSrc={e.iconSrc} rank={5} description={"test,test"} url={"9rtm.com"} />
          ))}
        </CardWrapper>
        
        <h1>🎮 i play</h1>
      </ContextBox>
    </>
  );
};

const Skills: Array<Technology> = [
  { id: "unity", name: "Unity", iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg"},
  { id: "react", name: "React", iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { id: "python", name: "Python3", iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"},
  { id: "figma", name: "Figma", iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"},
  { id: "blender", name: "Blender", iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg"},
  { id: "ubuntu", name: "Ubuntu", iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg"},
];

const nameStyle = css`
  display: inline-block;

  font-size: 1.5em;
  border-bottom: dotted #027775 5px;
`;

export default AboutPage;
