import * as React from "react"
import { faAddressCard } from "@fortawesome/free-solid-svg-icons"
/** @jsx jsx */
import { css, jsx } from "@emotion/react"
import Seo from "../seo"
import ContextBox from "../contextbox"

function Devicon({ src }) {
  return (
    <img
      src={src}
      css={css`
        width: 45px;
        margin-left: 4px;
      `}
    />
  )
}

function AboutPage() {
  return (
    <>
      <Seo title="about me" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
      />
      <ContextBox pageIcon={faAddressCard} pageTitle="about me">
        <h1>profile</h1>
        <img
          src="https://avatars.githubusercontent.com/u/65887771?v=4"
          css={css`
            float: left;
            margin: 0 40px 20px 0;
          `}
        />
        <p>
          <h2>9rotama</h2>
          <h3>frontend dev / game dev / UI design</h3>
          大学でCSを学んでいます。音楽ゲームが好きです。
          <br />
          ごく稀にイラストを描きます。
        </p>
        <p
          css={css`
            clear: both;
          `}
        />
        <h1>tools</h1>
        <Devicon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />
        <Devicon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" />
        <Devicon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/inkscape/inkscape-original.svg" />
        <Devicon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
        <Devicon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg" />
        <h1>programming</h1>
        <Devicon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg" />
        <Devicon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
        <Devicon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
        <Devicon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
        <Devicon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" />
        <Devicon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" />
        <Devicon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
        <Devicon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
      </ContextBox>
    </>
  )
}

export default AboutPage
