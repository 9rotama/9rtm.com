import * as React from "react";
import { css } from "@emotion/react";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import ContextBox from "../components/ContextBox";
import Devicon from "../components/forPages/aboutPage/Devicon";

type Technology = {
  id: string;
  name: string;
}

const toolsAndServices: Array<Technology> = [
  {id: "vscode", name: "VSCODE"},
  {id: "figma", name: "FIGMA"},
  {id: "inkscape", name: "INKSCAPE"},
  {id: "git", name: "GIT"},
  {id: "blender", name: "BLENDER"},
  {id: "docker", name: "DOCKER"},
];

const programming: Array<Technology> = [
  {id: "unity", name: "UNITY"},
  {id: "html5", name: "HTML5"},
  {id: "css3", name: "CSS3"},
  {id: "react", name: "REACT"},
  {id: "cplusplus", name: "C++"},
  {id: "javascript", name: "JAVASCRIPT"},
  {id: "typescript", name: "TYPESCRIPT"},
  {id: "python", name: "PYTHON"},
];

const AboutPage = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
      />
      <ContextBox pageIcon={faAddressCard} pageTitle="about me" pageDescription="自己紹介、スキルなど">
        <h1>📘 profile</h1>
        <img
          src="https://avatars.githubusercontent.com/u/65887771?v=4"
          alt={"prof"}
          css={css`
            margin: 20px 0 20px 0;
            position: relative;
            width: 180px;
            height: 180px;
            border-radius: 50%;

            transition-duration: 0.2s;

            @media (max-width: 600px) {
              & {
                float: none;
              }
            }

            &:hover {
              border-radius: 10%;

              transition-duration: 0.2s;
            }
          `}
        />
        <div>
          <h2
            css={css`
              font-size: 1.5em;
              border-bottom: dotted #027775 5px;
              display: inline-block;
            `}
          >
            9rotama
          </h2>
          <h3>
            frontend dev / game dev / UI design
          </h3>
          情報系大学の3年です。音楽ゲームが好きです。
          <br />
          ごく稀にイラストを描きます。
        </div>
        <p
          css={css`
            clear: both;
          `}
        />
        <h1>🧰 tools / services</h1>
        {toolsAndServices.map((e) => (
          <Devicon key={e.id + "-abouticon"} id={e.id} name={e.name} />
        ))}
        <h1>⌨️ programming</h1>
        {programming.map((e) => (
          <Devicon key={e.id + "-abouticon"} id={e.id} name={e.name} />
        ))}
      </ContextBox>
    </>
  );
};

export default AboutPage;
