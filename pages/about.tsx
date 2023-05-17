import * as React from "react";
import type { InferGetStaticPropsType, NextPage } from "next";
import { css } from "@emotion/react";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import ContextBox from "../components/common/ContextBox";
import ProfImage from "../components/about/ProfImage";
import { SkillCard } from "../components/about/SkillCard";
import CardWrapper from "../components/common/CardWrapper";
import { client } from "../libs/client";
import { Skill } from "../types/Skill";
import MyHead from "../components/common/MyHead";

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "skills" });

  return {
    props: {
      skills: data.contents,
    },
  };
};

type Props = {
  skills: Array<Skill>;
};

const AboutPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  skills,
}: Props) => {
  const pageTitle = "about me";
  const pageDescription = "自己紹介、スキルなど";

  const nameStyle = css`
    display: inline-block;

    font-size: 1.5em;
    border-bottom: dotted #027775 5px;
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
          <h3>game dev / UI design</h3>
          情報系大学の3年です。音楽ゲームが好きです。
          <br />
          主にクライアント側の開発に興味があります。
        </div>
        <h1>⌨️ i use</h1>
        <CardWrapper>
          {skills.map((e) => (
            <SkillCard
              key={e.name + "-skillicon"}
              name={e.name}
              iconSrc={e.iconSrc}
              rank={e.rank}
              description={e.description}
              url={e.url}
            />
          ))}
        </CardWrapper>
      </ContextBox>
    </>
  );
};

export default AboutPage;
