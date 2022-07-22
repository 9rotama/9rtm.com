import * as React from "react"
import { css } from "@emotion/react"
import { faAddressCard } from "@fortawesome/free-solid-svg-icons"
import ContextBox from "../components/ContextBox"
import Devicon from "../components/pages/aboutPage/Devicon"
import GitHubCalendar from "react-github-calendar"

const AboutPage = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
      />
      <ContextBox pageIcon={faAddressCard} pageTitle="about me">
        <h1>📘  profile</h1>
        <img
          src="https://avatars.githubusercontent.com/u/65887771?v=4"
          alt={"prof"}
          css={css`
            float: left;
            margin: 0 40px 20px 0;
            position: relative;
            width: 180px;
            height: 180px;
            border-radius: 10%;
            filter: drop-shadow(0px 3px 5px #252a3455);

            @media (max-width: 600px) {
              & {
                float: none;
              }
            }
          `}
        />
        <p>
          <span css={css`
            font-size: 2em;
            font-weight: 600;
            border-bottom: dashed #08D9D6 6px;
          `}>
            9rotama
          </span>
          <h3>frontend dev / game dev / UI design</h3>
          情報系大学の3年です。音楽ゲームが好きです。
          <br />
          ごく稀にイラストを描きます。アイコンは自作ドット絵のnikoです。
        </p>
        <p
          css={css`
            clear: both;
          `}
        />
        <h1>🧰  tools / services</h1>
        <Devicon name="vscode" />
        <Devicon name="figma" />
        <Devicon name="inkscape" />
        <Devicon name="git" />
        <Devicon name="blender" />
        <h1>⌨️  programming</h1>
        <Devicon name="unity" />
        <Devicon name="html5" />
        <Devicon name="css3" />
        <Devicon name="react" />
        <Devicon name="cplusplus" />
        <Devicon name="csharp" />
        <Devicon name="javascript" />
        <Devicon name="python" />
        <h1>🧰  git-contributes</h1>
        <GitHubCalendar username="9rotama" year={new Date().getFullYear()} color="#FF2E63"/>
      </ContextBox>
    </>
  );
}

export default AboutPage
