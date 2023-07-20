import * as React from "react";
import type { InferGetStaticPropsType, NextPage } from "next";
import { css } from "@emotion/react";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import ContextBox from "../components/_common/ContextBox/ContextBox";
import ProfImage from "../components/_pages/about/ProfImage";
import MyHead from "../components/_common/MyHead";
import { skills } from "../const/skills";
import TechIcon from "../components/_common/CardCommon/TechIcon";
import ToolTip from "../components/_common/ToolTip";

const AboutPage: NextPage = () => {
  const pageTitle = "about me";
  const pageDescription = "自己紹介、スキルなど";

  const nameStyle = css`
    display: inline-block;

    font-size: 1.5em;
    border-bottom: dotted #027775 5px;
  `;

  const skillsStyle = css`
    display: flex;
    gap: 10px;
    justify-content: center;
  `;

  return (
    <>
      <MyHead title={pageTitle} description={pageDescription} />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
      />
      <ContextBox
        pageIcon={faAddressCard}
        pageTitle={pageTitle}
        pageDescription={pageDescription}
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
          <h3>front dev / game dev</h3>
          情報系大学の学生です。音楽ゲームが好きです。
          <br />
          主にクライアント側の開発に興味があります。
        </div>
        <h1>⌨️ i use</h1>
        <section
          css={css`
            ${skillsStyle}
          `}
        >
          {skills.map((e, i) => (
            <ToolTip key={i} text={e.name}>
              <TechIcon name={e.name} size={"medium"} src={e.iconSrc} />
            </ToolTip>
          ))}
        </section>
      </ContextBox>
    </>
  );
};

export default AboutPage;
