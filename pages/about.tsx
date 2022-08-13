import * as React from "react";
import { css } from "@emotion/react";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import ContextBox from "../components/templates/ContextBox";
import TechIcon from "../components/atoms/about/TechIcon";
import ProfImage from "../components/atoms/about/ProfImage";

type Technology = {
  id: string;
  name: string;
  src: string;
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
        {Skills.map((e) => (
          <TechIcon key={e.id + "-skillicon"} id={e.id} src={e.src} name={e.name} />
        ))}
        <h1>🎮 i play</h1>
      </ContextBox>
    </>
  );
};

const Skills: Array<Technology> = [
  { id: "unity", name: "Unity", src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg"},
  { id: "react", name: "React", src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { id: "python", name: "Python3", src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"},
  { id: "figma", name: "Figma", src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"},
  { id: "blender", name: "Blender", src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg"},
  { id: "ubuntu", name: "Ubuntu", src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg"},
];

const nameStyle = css`
  display: inline-block;

  font-size: 1.5em;
  border-bottom: dotted #027775 5px;
`;

export default AboutPage;
