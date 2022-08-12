import * as React from "react";
import { css } from "@emotion/react";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import ContextBox from "../components/templates/ContextBox";
import Devicon from "../components/atoms/about/Devicon";
import ProfImage from "../components/atoms/about/ProfImage";

type Technology = {
  id: string;
  name: string;
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
          <h3>frontend dev / game dev / UI design</h3>
          情報系大学の3年です。音楽ゲームが好きです。
          <br />
          ごく稀にイラストを描きます。
        </div>
        <h1>⌨️ programming</h1>
        {programming.map((e) => (
          <Devicon key={e.id + "-abouticon"} id={e.id} name={e.name} />
        ))}
        <h1>🧰 tools / services</h1>
        {toolsAndServices.map((e) => (
          <Devicon key={e.id + "-abouticon"} id={e.id} name={e.name} />
        ))}
      </ContextBox>
    </>
  );
};

const toolsAndServices: Array<Technology> = [
  { id: "vscode", name: "VSCODE" },
  { id: "figma", name: "FIGMA" },
  { id: "inkscape", name: "INKSCAPE" },
  { id: "git", name: "GIT" },
  { id: "blender", name: "BLENDER" },
  { id: "docker", name: "DOCKER" },
  { id: "ubuntu", name: "UBUNTU" }
];

const programming: Array<Technology> = [
  { id: "react", name: "REACT" },
  { id: "javascript", name: "JAVASCRIPT" },
  { id: "typescript", name: "TYPESCRIPT" },
  { id: "html5", name: "HTML5" },
  { id: "css3", name: "CSS3" },
  { id: "python", name: "PYTHON" },
  { id: "cplusplus", name: "C++" },
  { id: "c", name: "C" },
  { id: "unity", name: "UNITY" },
  { id: "csharp", name: "C#" },
];

const nameStyle = css`
  display: inline-block;

  font-size: 1.5em;
  border-bottom: dotted #027775 5px;
`;

export default AboutPage;
